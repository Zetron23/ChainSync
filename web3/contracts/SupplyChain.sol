// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    address public producer;
    uint256 private tokenIdCounter;
    enum State { Produced, Distributed, Retailed, Purchased }

    struct Token {
        uint256 id;
        State state;
        uint256 ownerHistoryCount;
    }

    mapping(uint256 => Token) public tokens;
    mapping(address => uint256[]) public ownedTokens;

    event TokenProduced(uint256 tokenId);
    event TokenTransferred(uint256 tokenId, address to, State newState);

    modifier onlyProducer() {
        require(msg.sender == producer, "Only producer can call this.");
        _;
    }

    modifier validateTransfer(uint256 _tokenId, State requiredState) {
        require(tokens[_tokenId].state == requiredState, "Invalid token state for transfer.");
        _;
    }

    constructor() {
        producer = msg.sender;
        tokenIdCounter = 0;
    }

    function produceToken() external onlyProducer {
        uint256 newTokenId = tokenIdCounter++;
        tokens[newTokenId] = Token(newTokenId, State.Produced, 0);
        ownedTokens[msg.sender].push(newTokenId);
        emit TokenProduced(newTokenId);
    }

    function transferToken(address _to, uint256 _tokenId, State _newState) internal {
        require(_tokenId < tokenIdCounter, "Token does not exist.");
        require(tokens[_tokenId].state != State.Purchased, "Token is already with a customer.");
        
        tokens[_tokenId].state = _newState;
        if (_newState == State.Purchased) {
            tokens[_tokenId].ownerHistoryCount++;
        }

        
        removeTokenFromOwnerList(msg.sender, _tokenId);
        ownedTokens[_to].push(_tokenId);

        emit TokenTransferred(_tokenId, _to, _newState);
    }

    function removeTokenFromOwnerList(address _owner, uint256 _tokenId) private {
        uint256 length = ownedTokens[_owner].length;
        for (uint256 i = 0; i < length; i++) {
            if (ownedTokens[_owner][i] == _tokenId) {
                ownedTokens[_owner][i] = ownedTokens[_owner][length - 1];
                ownedTokens[_owner].pop();
                break;
            }
        }
    }

    function distribute(uint256 _tokenId) external validateTransfer(_tokenId, State.Produced) {
        transferToken(msg.sender, _tokenId, State.Distributed);
    }

    function retail(uint256 _tokenId) external validateTransfer(_tokenId, State.Distributed) {
        transferToken(msg.sender, _tokenId, State.Retailed);
    }

    function purchase(uint256 _tokenId) external validateTransfer(_tokenId, State.Retailed) {
        transferToken(msg.sender, _tokenId, State.Purchased);
    }

    function getTokenDetails(uint256 _tokenId) external view returns (Token memory) {
        require(_tokenId < tokenIdCounter, "Token does not exist.");
        return tokens[_tokenId];
    }
}

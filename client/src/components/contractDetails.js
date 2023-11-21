export const contractAddress = "0xEAd2B183970172C67d128f61a825C57060D583f8";
export const contractABI = [
  {
    type: "constructor",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "TokenProduced",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokenTransferred",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "to",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint8",
        name: "newState",
        indexed: false,
        internalType: "enum SupplyChain.State",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "distribute",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getTokenDetails",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [
          {
            type: "uint256",
            name: "id",
            internalType: "uint256",
          },
          {
            type: "uint8",
            name: "state",
            internalType: "enum SupplyChain.State",
          },
          {
            type: "uint256",
            name: "ownerHistoryCount",
            internalType: "uint256",
          },
        ],
        internalType: "struct SupplyChain.Token",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownedTokens",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "produceToken",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "producer",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "purchase",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "retail",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tokens",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "state",
        internalType: "enum SupplyChain.State",
      },
      {
        type: "uint256",
        name: "ownerHistoryCount",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
];

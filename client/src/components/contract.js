import { ethers } from "ethers";
import { provider, requestAccount } from "./ethereum";
import { contractAddress } from "./contractDetails";
import { contractABI } from "./contractDetails";

async function getContract() {
  await requestAccount();
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
}
async function produceToken() {
  const contract = await getContract();
  const transaction = await contract.produceToken();
  await transaction.wait();
}
async function distribute(tokenId) {
  const contract = await getContract();
  const transaction = await contract.distribute(tokenId);
  await transaction.wait();
}

async function retail(tokenId) {
  const contract = await getContract();
  const transaction = await contract.retail(tokenId);
  await transaction.wait();
}

async function purchase(tokenId) {
  const contract = await getContract();
  const transaction = await contract.purchase(tokenId);
  await transaction.wait();
}
async function getTokenDetails(tokenId) {
  const contract = await getContract();
  const details = await contract.getTokenDetails(tokenId);
  return details;
}

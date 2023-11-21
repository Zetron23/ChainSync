import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);

async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

export { provider, requestAccount };

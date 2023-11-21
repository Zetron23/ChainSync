import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
import WalletConnect from "./components/WalletConnect";
import {
  produceToken,
  distribute,
  retail,
  purchase,
  getTokenDetails,
} from "./components/contract";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          setWeb3(web3);
          setAccounts(accounts);
        } catch (error) {
          console.error("You need to allow MetaMask.");
        }
      } else {
        console.log(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    };

    loadBlockchainData();
  }, []);

  const handleProduce = async () => {
    await produceToken();
  };
  const handleDistribute = async () => {
    await distribute();
  };
  const handleRetail = async () => {
    await retail();
  };
  const handlePurchase = async () => {
    await purchase();
    const handleDetails = async () => {
      await getTokenDetails();
    };

    return (
      <>
        <h1 id="header">ChainSync</h1>
        <div class="tabs">
          <div class="prod">
            <btn onClick={handleProduce}>Produce</btn>
          </div>
          <div class="dis">Distribute</div>
        </div>

        <div class="tabs2">
          <div class="ret">Retail</div>
          <div class="pur">Purchase</div>
        </div>
      </>
    );
  };
};

export default App;

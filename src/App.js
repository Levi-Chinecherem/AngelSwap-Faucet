import React, { useState } from "react";
import { ethers } from "ethers";  // Corrected import of ethers.js
import Landing from "./components/Landing";
import Claim from "./components/Claim";
import Contract from "./components/Contract";
import Guide from "./components/Guide";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { tokenABI } from "./contract/TokenABI"; // Import ABI

const App = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const faucetTokens = [
    { name: "ANGEL", contract: process.env.REACT_APP_CONTRACT_ADDRESS },
    { name: "NGN Token", contract: process.env.REACT_APP_CONTRACT_ADDRESS },
    { name: "EKE", contract: process.env.REACT_APP_CONTRACT_ADDRESS },
    { name: "ONU", contract: process.env.REACT_APP_CONTRACT_ADDRESS },
    { name: "HALO", contract: process.env.REACT_APP_CONTRACT_ADDRESS },
  ];

  // Connect Wallet to MetaMask
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        await web3Provider.send("eth_requestAccounts", []); // Request accounts
        const signer = web3Provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setProvider(web3Provider);
        setContract(new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, tokenABI, signer));
      } else {
        alert("Please install MetaMask!");
      }
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      alert("Failed to connect wallet.");
    }
  };

  // Claim Tokens Function
  const claimTokens = async (token) => {
    if (!provider || !contract) {
      alert("Please connect your wallet first.");
      return;
    }
    
    try {
      const tx = await contract.claimTokens(walletAddress); // Calling the claim function
      await tx.wait(); // Wait for the transaction to be mined
      alert(`Claimed ${token} for wallet ${walletAddress}`);
    } catch (err) {
      console.error("Error claiming tokens:", err);
      alert("Failed to claim tokens.");
    }
  };

  return (
    <div className="font-sans bg-sciFiBg text-sciFiText">
      <Navbar />
      <Landing connectWallet={connectWallet} walletAddress={walletAddress} />
      <Claim claimTokens={claimTokens} walletConnected={!!walletAddress} />
      <Contract faucetTokens={faucetTokens} />
      <Guide />
      <Footer />
    </div>
  );
};

export default App;

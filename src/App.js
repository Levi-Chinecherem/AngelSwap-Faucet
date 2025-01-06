import React, { useState } from "react";
import { ethers } from "ethers"; // Importing ethers.js
import WalletConnectProvider from "@walletconnect/client"; // Import WalletConnect
import { Web3Provider } from "@ethersproject/providers"; // For WalletConnect provider

import Landing from "./components/Landing";
import Claim from "./components/Claim";
import Contract from "./components/Contract";
import Guide from "./components/Guide";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import contractJson from "./contracts/AngelToken.sol/AngelToken_Main.json"; // Import the contract JSON

const App = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const tokenABI = contractJson.abi; // Use the ABI from the JSON file
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS; // Load contract address from env

  // Connect Wallet to MetaMask or WalletConnect
  const connectWallet = async () => {
    try {
      let web3Provider;

      // Check if MetaMask is available (browser extension)
      if (window.ethereum) {
        console.log("MetaMask detected. Connecting...");
        await window.ethereum.enable(); // Request accounts using enable()
        web3Provider = new ethers.BrowserProvider(window.ethereum); // Use BrowserProvider for MetaMask
      } else {
        // Fallback to WalletConnect (mobile app)
        console.log("Using WalletConnect...");
        const walletConnectProvider = new WalletConnectProvider({
          rpc: {
            943: "https://rpc.v4.testnet.pulsechain.com", // PulseChain Testnet RPC URL
          },
          chainId: 943, // PulseChain Testnet Chain ID
        });
        await walletConnectProvider.enable();
        web3Provider = new Web3Provider(walletConnectProvider);
      }

      const signer = await web3Provider.getSigner();
      const address = await signer.getAddress();

      console.log("Connected Wallet Address:", address);

      if (!contractAddress) {
        throw new Error(
          "Contract address is not defined in the environment variables. Please check your .env file."
        );
      }

      console.log("Initializing contract...");
      const contractInstance = new ethers.Contract(contractAddress, tokenABI, signer);

      setWalletAddress(address);
      setProvider(web3Provider);
      setContract(contractInstance);

      console.log("Wallet connected successfully.");
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      if (err.message.includes("User rejected the request")) {
        alert("Connection was rejected. Please try again.");
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };

  // Claim Tokens Function
  const claimTokens = async () => {
    if (!provider || !contract) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const FAUCET_AMOUNT = ethers.parseUnits("5", 18); // Amount of tokens to claim
      const tx = await contract.mint(walletAddress, FAUCET_AMOUNT); // Call the mint function
      await tx.wait(); // Wait for transaction confirmation
      alert(`Claimed 5 ANGEL tokens for wallet: ${walletAddress}`);
    } catch (err) {
      console.error("Error claiming tokens:", err);
      alert("Failed to claim tokens. Please try again later.");
    }
  };

  return (
    <div className="font-sans bg-sciFiBg text-sciFiText">
      <Navbar />
      <Landing connectWallet={connectWallet} walletAddress={walletAddress} />
      <Claim claimTokens={claimTokens} walletConnected={!!walletAddress} />
      <Contract />
      <Guide />
      <Footer />
    </div>
  );
};

export default App;

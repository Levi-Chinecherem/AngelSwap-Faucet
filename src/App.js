import React, { useState } from "react";
import { BrowserProvider, Contract, parseUnits } from "ethers"; // Updated importsWalletConnect
import { EthereumProvider } from "@walletconnect/ethereum-provider";

import Landing from "./components/Landing";
import Claim from "./components/Claim";
import ContractComponent from "./components/Contract";
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
      const provider = await EthereumProvider.init({
        projectId: "aef30f98b347495ca196d8b272ae050d", // Replace with your WalletConnect project ID
        chains: [943], // PulseChain Testnet Chain ID
        showQrModal: true, // Display QR modal for non-supported environments
        qrcodeModalOptions: {
          mobileLinks: ["metamask", "trust"], // Specify supported wallets for deep linking
        },
      });

      await provider.enable(); // Request user connection
      const web3Provider = new BrowserProvider(provider);
      const signer = await web3Provider.getSigner();
      const address = await signer.getAddress();

      console.log("Wallet connected:", address);
      setWalletAddress(address);
      setProvider(web3Provider);

      // Initialize the contract
      const contractInstance = new Contract(contractAddress, tokenABI, signer);
      setContract(contractInstance);
    } catch (err) {
      console.error("Error connecting wallet:", err);
      alert("Failed to connect. Please try again.");
    }
  };

  // Claim Tokens Function
  const claimTokens = async () => {
    if (!provider || !contract) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const FAUCET_AMOUNT = parseUnits("5", 18); // Amount of tokens to claim
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
      <ContractComponent />
      <Guide />
      <Footer />
    </div>
  );
};

export default App;

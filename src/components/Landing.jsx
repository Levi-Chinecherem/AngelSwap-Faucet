import React from "react";

const Landing = ({ connectWallet, walletAddress }) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center p-4 bg-gradient-to-b from-sciFiBg to-gray-900">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-sciFiAccent mb-4">
          AngelSwap Faucet
        </h1>
        <p className="text-lg text-sciFiText mb-6">
          Claim your daily free ANGEL tokens and add them to your wallet! Ensure you are connected to the PulseChain network.
        </p>
        <button
          onClick={() => {
            console.log("Connect Wallet button clicked"); // Debug log for the button click
            connectWallet();
          }}
          className={`py-3 px-8 rounded font-bold transition ${walletAddress
            ? "bg-green-600 text-white cursor-default"
            : "bg-sciFiAccent text-sciFiBg hover:bg-white hover:text-sciFiAccent"
            }`}
          disabled={!!walletAddress} // Disable button if wallet is already connected
        >
          {walletAddress
            ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
            : "Connect Wallet"}
        </button>
        {walletAddress && (
          <p className="text-sm text-green-500 mt-4">
            Wallet connected successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default Landing;

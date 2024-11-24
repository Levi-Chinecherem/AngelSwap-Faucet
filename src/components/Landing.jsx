import React from "react";

const Landing = ({ connectWallet, walletAddress }) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center p-4 bg-gradient-to-b from-sciFiBg to-gray-900">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-sciFiAccent mb-4">
          AngelSwap Faucet
        </h1>
        <p className="text-lg text-sciFiText mb-6">
          Claim your free tokens daily and add them to your wallet! Switch to the PulseChain network to get started.
        </p>
        <button
          onClick={connectWallet}
          className="bg-sciFiAccent text-sciFiBg py-3 px-8 rounded font-bold hover:bg-white hover:text-sciFiAccent transition"
        >
          {walletAddress ? `Connected: ${walletAddress}` : "Connect Wallet"}
        </button>
      </div>
    </section>
  );
};

export default Landing;

import React from "react";

const Contract = () => {
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied!");
  };

  return (
    <section className="py-16 bg-gray-900 text-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-sciFiAccent">Token Contract</h2>
        <p className="text-lg text-center mb-8">
          Switch to the PulseChain network to claim your ANGEL tokens and add them to MetaMask using the contract address below.
        </p>
        <div className="bg-gray-700 p-6 rounded shadow relative text-center">
          <h3 className="text-xl font-semibold mb-2">ANGEL</h3>
          <p className="text-gray-400 text-sm break-words">Contract: {contractAddress}</p>
          <button
            onClick={copyToClipboard}
            className="mt-4 px-4 py-2 bg-sciFiAccent text-gray-900 font-bold rounded hover:bg-gray-300 transition"
          >
            Copy Contract Address
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contract;

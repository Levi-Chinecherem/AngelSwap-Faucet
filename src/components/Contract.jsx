import React from "react";

const Contract = ({ faucetTokens }) => {
  const copyToClipboard = (contract) => {
    navigator.clipboard.writeText(contract);
    alert("Contract address copied!");
  };

  return (
    <section className="py-16 bg-gray-900 text-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-sciFiAccent">Token Contracts</h2>
        <p className="text-lg text-center mb-8">
          Switch to the PulseChain network to claim your tokens and add them to MetaMask using the contract addresses below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {faucetTokens.map((token) => (
            <div
              key={token.name}
              className="bg-gray-700 p-6 rounded shadow relative"
            >
              <h3 className="text-xl font-semibold mb-2">{token.name}</h3>
              <p className="text-gray-400 text-sm break-words">Contract: {token.contract}</p>
              <button
                onClick={() => copyToClipboard(token.contract)}
                className="absolute top-2 right-2 text-sciFiAccent hover:text-white transition"
              >
                &#x2398; {/* Copy Icon */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contract;

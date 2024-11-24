import React, { useState } from "react";

const Claim = ({ claimTokens, walletConnected }) => {
  const [selectedToken, setSelectedToken] = useState("ANGEL");

  return (
    <section className="py-16 bg-gray-800 text-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Claim Your Tokens</h2>
        <p className="text-lg mb-6">
          Select the token you want to claim from the dropdown below and make sure your wallet is connected.
        </p>
        <div className="max-w-md mx-auto">
          <select
            className="w-full p-3 mb-6 bg-gray-700 text-sciFiText rounded"
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
          >
            <option value="ANGEL">ANGEL</option>
            <option value="NGN Token">NGN Token</option>
            <option value="EKE">EKE</option>
            <option value="ONU">ONU</option>
            <option value="HALO">HALO</option>
          </select>
          <button
            onClick={() => claimTokens(selectedToken)}
            disabled={!walletConnected}
            className={`w-full bg-sciFiAccent text-sciFiBg py-3 rounded font-bold ${
              walletConnected ? "hover:bg-white hover:text-sciFiAccent" : "opacity-50 cursor-not-allowed"
            } transition`}
          >
            Claim Tokens
          </button>
        </div>
      </div>
    </section>
  );
};

export default Claim;

import React from "react";

const Guide = () => (
  <section className="py-16 bg-gray-800 text-gray-200 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">How to Add Tokens to MetaMask</h2>
      <ol className="text-left max-w-3xl mx-auto text-lg space-y-4">
        {[
          "Open MetaMask and click the 'Import Tokens' button.",
          "Ensure you are switched to the PulseChain Network.",
          "Copy the desired token's contract address from the list above.",
          "Paste the contract address into the 'Token Contract Address' field.",
          "MetaMask will auto-fill the token symbol and decimals. Click 'Add Token'.",
          "You can now see the token in your wallet!",
        ].map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="bg-sciFiAccent text-sciFiBg font-bold h-8 w-8 flex items-center justify-center rounded-full mr-4">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Guide;

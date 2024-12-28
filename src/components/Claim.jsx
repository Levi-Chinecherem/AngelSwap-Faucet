import React, { useState } from "react";

const Claim = ({ claimTokens, walletConnected }) => {
  const [loading, setLoading] = useState(false); // Track loading state

  const handleClaim = async () => {
    if (loading || !walletConnected) return; // Prevent clicking if already loading or wallet is not connected

    setLoading(true); // Set loading to true when the claim process starts

    try {
      // Call the claimTokens function and pass the necessary argument
      await claimTokens("ANGEL");
    } catch (error) {
      console.error("Error claiming tokens:", error);
      alert("Failed to claim tokens. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after the process is complete
    }
  };

  return (
    <section className="py-16 bg-gray-800 text-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Claim Your ANGEL Tokens</h2>
        <p className="text-lg mb-6">
          Make sure your wallet is connected to the PulseChain network before claiming your tokens.
        </p>
        <div className="max-w-md mx-auto">
          <button
            onClick={handleClaim}
            disabled={!walletConnected || loading} // Disable button if not connected or loading
            className={`w-full bg-sciFiAccent text-sciFiBg py-3 rounded font-bold ${walletConnected && !loading ? "hover:bg-white hover:text-sciFiAccent" : "opacity-50 cursor-not-allowed"
              } transition`}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 text-sciFiBg mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" fill="none" />
                  <path d="M4 12a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
                Processing...
              </div>
            ) : (
              "Claim ANGEL Tokens"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Claim;

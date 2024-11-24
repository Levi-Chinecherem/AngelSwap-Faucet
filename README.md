# AngelSwap Faucet System

This is the faucet system for **AngelSwap**, a decentralized platform built on **PulseChain**. The faucet allows users to claim tokens daily after connecting their wallets. This system includes features like token claiming, wallet connection, and network guidance for users.

## Features
- **Daily Token Claims**: Users can claim multiple tokens (ANGEL, NGN Token, EKE, ONU, HALO) daily.
- **MetaMask Integration**: Wallet connection with automatic switching to PulseChain network.
- **Responsive Design**: Optimized for mobile use, accessible via a Telegram mini-app.
- **User-Friendly Interface**: Simple UI to select tokens and view contract addresses for adding to MetaMask.

## Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager, comes with Node.js)
- [Telegram WebApp](https://core.telegram.org/bots/webapps) (For Telegram bot functionality)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Levi-Chinecherem/AngelSwap-Faucet.git
   cd AngelSwap-Faucet
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file at the root of the project and add your contract address for PulseChain network:
   ```
   REACT_APP_CONTRACT_ADDRESS=0x123ABC456DEF7890
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   This will start the app at `http://localhost:3000`. You can now view the faucet system in your browser.

## Usage

### Wallet Connection
- The faucet allows users to connect their MetaMask wallet or any Ethereum-compatible wallet.
- Upon successful wallet connection, the user’s Telegram username will be automatically displayed in the app.

### Claim Tokens
- Users can select from a list of available tokens (ANGEL, NGN Token, EKE, ONU, HALO).
- Each user can claim tokens once per day.
- The faucet displays the contract addresses for each token, which can be added to MetaMask by copying the contract address.

### MetaMask Network Switch Guide
- The system provides guidance for users on how to switch to the **PulseChain** network in MetaMask.
- Contract addresses for the tokens are displayed, and users can easily copy and add them to their wallets.

## File Structure

- `src/` - Contains all the source code for the frontend.
  - `components/` - Contains React components like `Navbar`, `Claim`, `Contract`, `Guide`, `Footer`.
  - `App.js` - Main entry point for the React app.
  - `contract/` - Folder to store contract ABI and related files (optional).
- `.env` - Environment file to store sensitive information like contract address.

## Customizing the Faucet

### Changing Token Details
To change the tokens available in the faucet or their contract addresses, you can modify the `faucetTokens` array in the `App.js` file.

```javascript
const faucetTokens = [
  { name: "ANGEL", contract: "0x123ABC456DEF7890" },
  { name: "NGN Token", contract: "0x456DEF7890ABC123" },
  { name: "EKE", contract: "0x7890ABC123DEF456" },
  { name: "ONU", contract: "0xDEF4567890ABC123" },
  { name: "HALO", contract: "0xABC123DEF4567890" },
];
```

### Modifying the UI
The UI is built with **Tailwind CSS**. You can customize the styling by modifying the classes in the components located in the `src/components/` directory.

For example, to change the background color of the "Claim Tokens" button, you can update the classes in the `Claim.js` file:
```javascript
<button
  onClick={() => claimTokens(selectedToken)}
  disabled={!walletConnected}
  className={`w-full bg-sciFiAccent text-sciFiBg py-3 rounded font-bold ${walletConnected ? "hover:bg-white hover:text-sciFiAccent" : "opacity-50 cursor-not-allowed"} transition`}
>
  Claim Tokens
</button>
```

## Deployment

To deploy the application to production:

1. Build the app:
   ```bash
   npm run build
   ```

2. Deploy the `build/` folder to your preferred hosting platform (e.g., Netlify, Vercel, or your custom server).

## Contributing

1. Fork the repository
2. Clone your forked repository to your local machine
3. Make your changes and commit them
4. Push the changes to your forked repository
5. Open a pull request from your fork to the main repository

## License

This project is licensed under the MIT License.

## Acknowledgements

- Built with React, Tailwind CSS, and Web3 technologies.
- Powered by the **PulseChain** blockchain.
- Special thanks to Telegram for their WebApp platform and the broader crypto community!

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#582525] to-sciFiBg text-gray-200 text-center py-8 mt-auto ">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-wider text-sciFiAccent">Join the Revolution!</h3>
          <p className="text-sm">
            ©{currentYear} AngelSwap. All rights reserved. Built on PulseChain.
          </p>
        </div>
        <div className="mt-8">
          <p className="text-xs text-gray-500">Crafted with 💻 & ⚡ on PulseChain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

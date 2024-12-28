import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check if Telegram WebApp is available
    if (window.Telegram && window.Telegram.WebApp) {
      // Retrieve the user's Telegram username
      const user = window.Telegram.WebApp.initDataUnsafe;
      const userName = user?.user?.username;

      if (userName) {
        setUsername(userName);
      } else {
        setUsername("Guest"); // Default to "Guest" if username isn't available
      }
    }
  }, []);

  return (
    <nav className="bg-gray-900 text-sciFiAccent py-4 px-6 flex justify-between items-center sticky top-0 z-10 shadow-lg">
      <div className="text-2xl font-bold">AngelSwap</div>
      <div className="text-lg">
        {username ? `Hey, ${username}` : "Hey, Guest"}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "../index.css";
import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../utils/wallet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [wallet, setWallet] = useState(null);

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWallet(wallet);
  };
  const handleDisconnectWallet = async () => {
    const { wallet } = await disconnectWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount();
      if (account) {
        setWallet(account.address);
      }
    };
    func();
  }, []);

  return (
    <nav className="bg-gray-800 h-14 flex items-center px-10 justify-between">
      <div className="flex-1 space-x-4">
        <Link to="/" className="font-bold text-white pr-6">
          Teztriz
        </Link>
      </div>
      <div>
        <button
          onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
          className="bg-red-500 px-6 py-2 rounded-sm text-xs font-semibold text-white cursor-pointer"
        >
          💳{" "}
          {wallet
            ? wallet.slice(0, 4) +
              "..." +
              wallet.slice(wallet.length - 4, wallet.length)
            : "Connect"}
        </button>
      </div>
    </nav>
  );
}

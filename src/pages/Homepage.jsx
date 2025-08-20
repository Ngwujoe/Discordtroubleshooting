import wallet from '../image/wallet.png'
import metamask from '../image/metamask.svg'
import Bitgo from '../image/bitgo.svg'
import Coinbase from '../image/coinbase.svg'
import trustwallet from '../image/trustwallet.svg'
import exodus from '../image/exodus.svg'
import { Header } from '../components/Header'
import { Link } from "react-router-dom";



function Homepage() {
    return (
        <>
       <Header/>
      <section class="bg-blue-950 dark:bg-blue-950 text-white text-center py-16 px-4 transition-colors justify-between duration-500" data-aos="zoom-in">
    <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div><h2 class="text-3xl sm:text-5xl font-bold mb-4">Wallet TroubleShooter</h2>
         <p class="mb-6 text-lg sm:text-xl max-w-2xl mx-auto">
           CBlocks-DApps Mainnet focuses on addressing common issues faced by Web3 applications, such as scalability, interoperability, and user adoption.
           </p>
           <Link to="/connect"><button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 dark:bg-green-800 dark:text-white dark:hover:bg-green-700 transition"> Connect Wallet</button></Link>
        </div>
        <img src={wallet} alt="" className="w-full h-auto max-w-full" />
    </div>
  </section>
  <section class="bg-blue-950 text-center items-center">POWERED BY AMAZING INVESTORS</section>
  <section><div className="bg-blue-950 grid grid-cols-1 md:grid-cols-5 lg:grid-5 gap-8 items-center justify-items-center">
    <div> <img src={metamask} />
    </div>
    <div> <img src={Bitgo} />
    </div>
    <div> <img src={Coinbase} />
    </div>
    <div> <img src={trustwallet} />
    </div>
    <div> <img src={exodus} />
    </div>
  </div>
  </section>  


  <section class="container bg-blue-950 mx-auto px-4 py-16 text-white">
    <h2 class="text font-bold text-center sm:text-2xl md:text-5xl lg:text-6xl">Take Full Control of Your Crypto</h2>
    <p class="text-center max-w-3xl mx-auto mt-10">
        Built on Arbitrum and Avalanche, our decentralized leverage trading exchange focuses on being the best execution environment for trades.
    </p>
</section>

<section>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div class="bg-blue-950 p-8">
        <div class="bg-blue-800 p-3 rounded-2xl">
            <div class="flex gap-4 items-center">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet h-6 w-6 text-green-300"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
            </path>
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
            </svg></div>

            <h3 class="text-2xl font-semibold text-white">
                Your funds are as secure
            </h3>
            </div>
            <p class="text-blue-100">
                Our platform implements industry-leading security measures to ensure your assets remain protected at all times.
            </p>
            
        </div>
        
    </div>


    <div class="bg-blue-950 p-8">
        <div class="bg-blue-800 p-3 rounded-2xl">
            <div class="flex gap-8 items-center">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet h-6 w-6 text-green-300"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
            </path>
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
            </svg></div><div></div>

            <h3 class="text-2xl font-semibold text-white">
               Built by seasoned crypto
            </h3>
            </div>
            <p class="text-blue-100">
                Our team consists of experienced blockchain developers and financial experts dedicated to creating a reliable trading environment.
            </p>
          </div>
          </div>
        </div>
</section>

        
        </>
    )
}


export default Homepage;
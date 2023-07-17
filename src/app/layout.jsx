"use client"

import { AuthContextProvider } from '@/context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThirdwebProvider, paperWallet, metamaskWallet, localWallet, coinbaseWallet } from "@thirdweb-dev/react";

//import { BrowserRouter } from 'react-router-dom'


const inter = Inter({ subsets: ['latin'] })
const activeChain = "mumbai";




export default function RootLayout({ children }) {

  return (
    <ThirdwebProvider activeChain={activeChain}
    supportedWallets={[
     metamaskWallet(),
     coinbaseWallet(),
     localWallet()
    ]}
    >
    <AuthContextProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </AuthContextProvider>
    </ThirdwebProvider>
  )
}

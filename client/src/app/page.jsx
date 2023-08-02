"use client"

import Dashboard from "./dashboard/page"
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import SignIn from "./signin/page";



export default function Home() {

  const address = useAddress();

  
  return (
  <main>
{!address ? (
      <div className="">
     <ConnectWallet/>
      </div>
      ) : (
      <Dashboard/>
      )}
  </main>
  )
}

"use client"

import React from 'react'
import Logo from '../../../public/logo.svg'
import Image from 'next/image'
import { ConnectWallet } from '@thirdweb-dev/react'


export default function SignIn() {


  return (
    <div className='container flex flex-col items-center justify-center h-screen'>
        <div className="">
         <Image
          src={Logo}
          alt="Logo"
          className='w-32'
          />
       <ConnectWallet
      btnTitle='Sign In'
      theme='dark'
      className='!text-white !bg-gradient-to-r !from-blue-500 !via-blue-600 !to-blue-700 !hover:bg-gradient-to-br !focus:ring-4 !focus:outline-none !focus:ring-blue-300 !dark:focus:ring-blue-800 !shadow-lg !shadow-blue-500/50 !dark:shadow-lg !dark:shadow-blue-800/80 !font-medium !rounded-lg !text-xs !px-2 !py-2.5 !text-center !mr-2 !mb-2'
      />
      </div>
    </div>
  )
}

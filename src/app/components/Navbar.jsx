"use client"

import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import Menu from '../../../public/menu.png'
import Dp from '../../../public/home.png'
import Chat from '../../../public/chat.png'
import Bell from '../../../public/bell.png'
import User from '../../../public/user.png'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import Link from 'next/link'


export default function Navbar() {

  const address = useAddress();


  return (
<div className="navbar flex flex-row bg-base-200 rounded-xl mt-5">
  
  <div className="flex-1 sm:hidden">
    <Image
          src={Logo}
          alt="Logo"
          className='w-16'
          />
  </div>
  <div className='flex-1 hidden sm:block'>
    Workspace
  </div>

  {address && (
    <>
       {/**icons */} 
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        
        <div className="w-6 rounded-full">
          <Image
          src={Chat}
          alt="chat"
          />
        </div>
      </label>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-6 rounded-full">
          <Image
          src={Bell}
          alt="bell"
          />
        </div>      
      </label>

       {/**last icon and dropdown */}
  
    {/**second  */}
      <div className="dropdown dropdown-end sm:hidden hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
          src={Menu}
          alt="Logo"
          className="h-5 w-5"
          />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </>
  )}
{!address ? (
<ConnectWallet
btnTitle='Sign In'
theme='dark'
className='!text-white !bg-gradient-to-r !from-blue-500 !via-blue-600 !to-blue-700 !hover:bg-gradient-to-br !focus:ring-4 !focus:outline-none !focus:ring-blue-300 !dark:focus:ring-blue-800 !shadow-lg !shadow-blue-500/50 !dark:shadow-lg !dark:shadow-blue-800/80 !font-medium !rounded-lg !text-xs !px-2 !py-2.5 !text-center !mr-2 !mb-2'
dropdownPosition={{
  align: 'center',
  side: 'top',
}}
/>
) : (
  <div className="dropdown dropdown-end justify-items-end flex flex-row">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">      
    <div className="w-7 rounded-full">
      <Link href={`./profile`}>
      <Image
      src={User}
      alt="dp"
      />
      </Link>
    </div>       
  </label>
</div>
) }

</div>
  )
}

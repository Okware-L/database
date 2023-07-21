"use client"

import React from 'react'
import Logo from '../../../public/logo.svg'
import Image from 'next/image'



export default function SignIn() {


  return (
    <div className='container flex flex-col items-center justify-center h-screen'>
        <div className="">
         <Image
          src={Logo}
          alt="Logo"
          className='w-32'
          />
      
      </div>
    </div>
  )
}

"use client"

import React, {useRef} from 'react'
import Logo from '../../../public/logo.svg'
import Image from 'next/image'


export default function Login() {


  return (
    <div className='container flex flex-col items-center justify-center h-screen'>
        <div className="">
         <Image
          src={Logo}
          alt="Logo"
          className='w-32'
          />
      </div>
      
     <div className="form-control w-full max-w-xs">
        <label className="label">
         <span className="label-text">Username / E-Mail</span>
        </label>
        <input type="text" className="input input-bordered input-accent w-full max-w-xs" />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
         <span className="label-text">Password</span>
        </label>
        <input type="text" className="input input-bordered input-accent w-full max-w-xs" />
        <span className="link link-accent">Forgot Password</span>
      </div>
      <div className='btn btn-accent my-2'>Login</div>
      <p className='my-3'>Need an account ? <span className='link link-accent'>Sign Up</span></p>
      <div onClick={signInWithGoogle} className='link link-accent'>sign in with Google</div>
    </div>
  )
}

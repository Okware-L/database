"use client"

import React, {useRef, useState} from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'

export default function Register() {

 

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
     <span className="label-text">E-Mail</span>
    </label>
    <input type="text" className="input input-bordered input-accent w-full max-w-xs" />
  </div>
  <div className="form-control w-full max-w-xs">
    <label className="label">
     <span className="label-text">Password</span>
    </label>
    <input type="text" className="input input-bordered input-accent w-full max-w-xs" />
  </div>
  <div className="form-control w-full max-w-xs">
    <label className="label">
     <span className="label-text">Confirm Password</span>
    </label>
    <input type="text" className="input input-bordered input-accent w-full max-w-xs" />
  </div>
  <div className='btn btn-accent my-2'type='submit' >Register</div>
  <div className=''>Already Have An Account ? <span className='link link-accent'>Log In</span></div>
  <div className='btn btn-ghost'>Sign Up With Google</div>
</div>

  )
}

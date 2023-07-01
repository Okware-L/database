import React from 'react'
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
     <span className="label-text">Name</span>
    </label>
    <div className='flex flex-row gap-x-2'>
       <input type="text" placeholder='First Name' className="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" placeholder='Last Name' className="input input-bordered input-accent w-full max-w-xs" />
    </div>
   
  </div>

  <div className="form-control w-full max-w-xs">
    <label className="label">
     <span className="label-text">Username</span>
    </label>
    <input type="text" className="input input-bordered input-accent w-full max-w-xs" />
  </div>
  <div className="form-control w-full max-w-xs">
    <label className="label">
     <span className="label-text">Password</span>
    </label>
    <input type="text" className="input input-bordered input-accent w-full max-w-xs" />
  </div>
  <div className='btn btn-accent my-2'>Register</div>
</div>
  )
}

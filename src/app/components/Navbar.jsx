import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import Menu from '../../../public/menu.png'

export default function Navbar() {
  return (
<div className="navbar flex flex-row bg-base-200 rounded-md">
  <div className="sm:hidden">
    <Image
          src={Logo}
          alt="Logo"
          className='w-24'
          />
  </div>
  <div className='flex-1'>
    Workspace
  </div>

    <div className="dropdown dropdown-end justify-items-end flex-none">
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

</div>
  )
}

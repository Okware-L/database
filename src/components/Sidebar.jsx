import React from 'react'
import Image from 'next/image'
import Schedule from '../../public/schedule.png'
import Dash from '../../public/dashboard.png'
import Comm from '../../public/diversity.png'
import Market from '../../public/shopping-bag.png'
import News from '../../public/newspaper.png'
import Logo from '../../public/logo.svg'
import Link from 'next/link'

const sidebar = () => {
  return (
    <div className='menu p-4 w-70 h-full bg-base-200 text-base-content scroll-auto'>
    <div className='flex p-2'>
    <div className="avatar w-24 ">
     <Image
     src={Logo}
     alt='Logo'
     className=''
     />
     jm
    </div>
    </div>
    <input type="text" placeholder="Search" className="input input-bordered input-sm w-full max-w-xs" />
  <div className="divider"></div> 
  <ul className="menu w-60  ">
  <li>
    <a>
        <Image
        src= {Dash}
        alt=''
        className="h-5 w-5"
        />
    Home
    </a>
  </li>
  <li className='my-1'>
    <a>
        <Image
        src= {Comm}
        alt=''
        className="h-5 w-5"
        />
    Community
    </a>
  </li>
  <li className='my-1'>
    <Link href='/tasks'>
        <Image
        src= {Market}
        alt=''
        className="h-5 w-5"
        />
    Marketplace
    </Link>
  </li>
  <li className='my-1'>
    <Link href='/chat'>
        <Image
        src= {Schedule}
        alt=''
        className="h-5 w-5"
        />
    Events
    </Link>
  </li>
  <li className='my-1'>
    <a>
        <Image
        src= {News}
        alt=''
        className="h-5 w-5"
        />
    News Feed
    </a>
  </li>


  <div className="divider"></div> 
  {/**Community  section */}
 <div>
  <h2 className='font-bold'>My community</h2>
  <div className='flex my-1 p-2'>
    <Image
    src= {Logo}
    alt='pic'
    className="h-8 w-8"
    />
    <div className='flex flex-col mx-4'>
      <h2>Title</h2>
      <p>Description</p>
    </div>
  </div>
  <div className='flex my-1 p-2'>
    <Image
    src= {Logo}
    alt='pic'
    className="h-8 w-8"
    />
    <div className='flex flex-col mx-4'>
      <h2>Title</h2>
      <p>Description</p>
    </div>
  </div>
  <div className='flex my-1 p-2'>
    <Image
    src= {Logo}
    alt='pic'
    className="h-8 w-8"
    />
    <div className='flex flex-col mx-4'>
      <h2>Title</h2>
      <p>Description</p>
    </div>
  </div>
  <div className='flex my-1 p-2'>
    <Image
    src= {Logo}
    alt='pic'
    className="h-8 w-8"
    />
    <div className='flex flex-col mx-4'>
      <h2>Title</h2>
      <p>Description</p>
    </div>
  </div>


  <div className="divider"></div> 
  {/**Events section */}

    <h2 className='font-bold'>Events</h2>

    {/**first event */}
    <div className='flex p-2'>
   <div className='flex flex-col bg-base-100 p-3 rounded-full'>
      <p className='ml-1'>
        20
      </p>
      <p>
        Dec
      </p>
   </div>
    <div className='flex flex-col mx-4 justify-center'>
      <h2>Title</h2>
      <p>Description</p>
    </div>
  </div>


  {/**second event */}
  <div className='flex p-2'>
   <div className='flex flex-col bg-base-100 p-3 rounded-full'>
      <p className='ml-1'>
        20
      </p>
      <p>
        Dec
      </p>
   </div>
    <div className='flex flex-col mx-4 justify-center'>
      <h2>Title</h2>
      <p>Description</p>
    </div>
  </div>

  </div>
 </ul>
</div>
  )
}

export default sidebar
import React from 'react'
import Image from 'next/image'
import Schedule from '../../public/schedule.png'
import Dash from '../../public/dashboard.png'
import Comm from '../../public/diversity.png'
import Market from '../../public/shopping-bag.png'
import News from '../../public/newspaper.png'
import Logo from '../../public/logo.svg'
import Arch from '../../public/arch.jpg'
import Link from 'next/link'


const sidebar = () => {
  return (
    <div className='menu p-4 w-70 h-screen bg-base-200 text-base-content scroll-auto'>
    <div className='flex p-2'>
    <div className="avatar w-24 ">
     <Image
     src={Logo}
     alt='Logo'
     className=''
     />
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
  <h2 className='font-bold my-2'>Community</h2>
  <div className='flex my-1 p-2'>
    <Image
    src= {Arch}
    alt='pic'
    className="h-8 w-8 rounded-full"
    />
    <div className='flex flex-col mx-4'>
      <h2 className='text-xs font-bold'>Architecture Competition</h2>
    </div>
  </div>
  <div className='flex my-1 p-2'>
    <Image
    src= {Logo}
    alt='pic'
    className="h-8 w-8 rounded-full bg-slate-600 p-1"
    />
    <div className='flex flex-col mx-4'>
      <h2 className='font-bold text-xs'>Investment Options</h2>
      <p className='text-xs'>#explore</p>
    </div>
  </div>
  <div className='flex my-1 p-2'>
    <Image
    src= {Logo}
    alt='pic'
    className="h-8 w-8"
    />
    <div className='flex flex-col mx-4'>
      <h2 className='text-xs font-bold'>About jmqafri</h2>
      <p className='text-xs'>#explore</p>
    </div>
  </div>
  <div className='flex my-1 p-2'>
    <Image
    src= {Market}
    alt='pic'
    className="h-8 w-8"
    />
    <div className='flex flex-col mx-4'>
      <h2 className='text-xs font-bold'>Jobs & Careers</h2>
      <p className='text-xs'>#explore</p>
    </div>
  </div>
  
  </div>
 </ul>
</div>
  )
}

export default sidebar
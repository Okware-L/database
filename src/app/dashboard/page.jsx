import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Image from 'next/image'
import Chat from '../../../public/chat.png'
import Dash from '../../../public/dashboard.png'
import Bell from '../../../public/bell.png'
import Taskspng from '../../../public/tasks.png'
import Dp from '../../../public/user.png'
import Link from 'next/link'


export default function Dashboard() {
  return (
    <div>
    <div className="drawer lg:drawer-open">
   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content m-5">
     {/* Page content here */}
        <Navbar/>
        <Hero/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu bg-base-200 w-80 h-full pt-9">
  <li className='mx-5'>
    <a>
        <Image
        src= {Dash}
        alt=''
        className="h-5 w-5"
        />
    Dashboard
    </a>
  </li>
  <li className='mx-5 my-3'>
    <a>
        <Image
        src= {Bell}
        alt=''
        className="h-5 w-5"
        />
    Notifications
    </a>
  </li>
  <li className='mx-5 my-3'>
    <Link href='/dashboard/tasks'>
        <Image
        src= {Taskspng}
        alt=''
        className="h-5 w-5"
        />
    Tasks
    </Link>
  </li>
  <li className='mx-5 my-3'>
    <a>
        <Image
        src= {Chat}
        alt=''
        className="h-5 w-5"
        />
    Chat
    </a>
  </li>
  <li className='mx-5 my-3'>
    <a>
        <Image
        src= {Dp}
        alt=''
        className="h-5 w-5"
        />
    Profile
    </a>
  </li>
 
</ul>
  </div>
</div>
</div>
  )
}

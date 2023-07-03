import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import User from '../../../public/user.png'
import Next from '../../../public/next.png'


export default function Dashboard() {
  return (
    
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col m-3">
    {/* Page content here */}
    
  <Navbar/>
  <div className='flex flex-row my-3 justify-between'>
  <div className=''>
    <label htmlFor="my-drawer-2" className="drawer-button mt-5 lg:hidden">
    <Image
    src={Next}
    alt='arrow'
    className='w-5 h-5'
    />
   </label>
   </div>

<div class="flex -space-x-2 mx-1">
  
    <Image class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" src={User} alt=""/>
    <Image class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" src={User} alt=""/>
    <Image class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" src={User} alt=""/>
    <Image class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" src={User} alt=""/>
    <a class="flex items-center justify-center w-7 h-7 text-xs font-medium text-white bg-gray-700 border-1 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
</div>

  </div>
  
  <Hero/>
 
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-70 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <Sidebar/>
    </ul>
  
  </div>
</div>
  )
}

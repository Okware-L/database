import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Next from '../../../public/next.png'


export default function Dashboard() {
  return (
    
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col m-5">
    {/* Page content here */}
    
  <Navbar/>
   <label htmlFor="my-drawer-2" className="drawer-button mt-5 lg:hidden">
    <Image
    src={Next}
    alt='arrow'
    className='w-5 h-5'
    />
   </label>
  <Hero/>
 
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <Sidebar/>
    </ul>
  
  </div>
</div>
  )
}

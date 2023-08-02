"use client"

import React, {useState} from 'react'
import Feed from './Feed';
import Leftbar from './Leftbar';



export default function Hero() {

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-6'>
          {/**right section */}
    <section className='p-5 items-stretch grid grid-row col-span-4 bg-base-200 m-2'>
      <Feed/>
    </section>

      {/**left section */} 
     <section className='sm:basis-0 col-span-2 m-2 hidden lg:block'>
       <Leftbar/>
    </section>
        
    </div>
  )
}

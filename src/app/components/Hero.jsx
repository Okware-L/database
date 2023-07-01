"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import dp from '../../../public/user.png'


export default function Hero() {

  const [uniId, setUniId] = useState("");

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-6 bg-red-500'>
          {/**right section */}
            <section className='p-5 items-stretch grid grid-row col-span-4'>
              <div>
                <h3 className='leading-loose'>Current Tasks</h3>
                <div>
                  New
                </div>
              </div>                   
            </section>

            {/**left section */} 
            <section className='p-5 grid-row sm:basis-0 col-span-2 '>
               sidebar 2
            </section>
        
    </div>
  )
}

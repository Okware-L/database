"use client"

import React, {useState} from 'react'
import UniversityForm from './UniversityForm'
import Image from 'next/image'
import dp from '../../../public/user.png'


export default function Hero() {

  const [uniId, setUniId] = useState("");

  return (
    <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-6 '>

            <section className='p-5 items-stretch grid grid-row col-span-4'>
              <div>
                <h3 className='leading-loose'>Current Tasks</h3>
                <div>
                  New
                </div>
              </div>
              
              <div>
                <h3 className='leading-loose'>Upcoming Tasks</h3>
                <p>
                  Yield Farm
                </p>
              </div>
              
            </section>
            <section className='p-5 grid-row sm:basis-0 col-span-2 '>
               
               
               <div className=''>
                <h1>Chat</h1>
               <div className="avatar-group -space-x-4 flex flex-row justify-center">
                <div className="avatar h-10 w-10">
                   <div className="w-12">
                   <Image
                     src={dp}
                    />
                  </div>
               </div>
  <div className="avatar h-10 w-10">
    <div className="w-12">
    <Image
      src={dp}
      />
    </div>
  </div>
  <div className="avatar h-10 w-10">
    <div className="w-12">
    <Image
      src={dp}
      />
    </div>
  </div>
  <div className="avatar h-10 w-10">
    <div className="w-12">
    <Image
      src={dp}
      />
    </div>
  </div>
</div>
</div>
            </section>
        
    </div>
  )
}

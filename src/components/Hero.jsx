"use client"

import React, {useState} from 'react'



export default function Hero() {

  const [uniId, setUniId] = useState("");

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-6'>
          {/**right section */}
            <section className='p-5 items-stretch grid grid-row col-span-4 bg-base-200 m-2'>
              <div>
                <h3 className='leading-loose'>Posts</h3>
                <div>
                  New Post
                </div>
              </div>
            </section>

            {/**left section */} 
            <section className='p-5 grid-row sm:basis-0 col-span-2 bg-base-200 m-2'>
               sidebar
            </section>
        
    </div>
  )
}

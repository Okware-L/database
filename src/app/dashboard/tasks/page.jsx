"use client"

import React, {useState} from 'react'
import UniversityList from '@/app/components/UniversityList'

  export default function Tasks() {

  const [uniId, setUniId] = useState("");

  const getUniIdHandler = (id) => {
    console.log("This is ID of doc to be edited: ", id);
    setUniId(id);
  }
  return (
    <div className='p-20'>
         <UniversityList getUniId={getUniIdHandler}/>
    </div>
  )
}

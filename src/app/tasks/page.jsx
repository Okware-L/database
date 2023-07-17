"use client"

import React, {useState} from 'react'
import UniversityList from '@/components/UniversityList'
import UniversityForm from '@/components/UniversityForm';

  export default function Tasks() {

  const [uniId, setUniId] = useState("");

  const getUniIdHandler = (id) => {
    console.log("This is ID of doc to be edited: ", id);
    setUniId(id);
  }
  return (
    <div className='p-20'>
        <UniversityForm id={uniId} setUniId={setUniId}/>
         <UniversityList getUniId={getUniIdHandler}/>
    </div>
  )
}

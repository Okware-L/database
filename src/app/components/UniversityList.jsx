"use client"

import React, {useEffect, useState} from 'react'
import uniDataService from '../services/university.add'



const UniversityList = ({getUniId} ) => {
        const [uni, setUni] = useState([]);
        useEffect(() => {
            getUni();
        }, []);

        const getUni = async () => {
            const data = await uniDataService.getAllUni();
            console.log(data.docs);
            setUni(data.docs.map((doc)  => ({...doc.data(), id: doc.id})));
        }

        const deleteHandler = async(id) => {
            await uniDataService.deleteUni(id);
            getUni();
        }


  return (
    <>
    <div className='m-3'>
        <button className='btn btn-neutral' onClick={getUni}>
            Refresh
        </button>
    </div>
    <div className="overflow-x-auto">
    <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>State</th> 
        <th>School</th> 
        <th>Website</th> 
        <th>Control</th> 
      </tr>
    </thead> 
    <tbody>
        {uni.map((doc, index) => {
            return (
        <tr key={doc.id}>
        <th>{index + 1}</th> 
        <td> {doc.name}</td> 
        <td>{doc.state}</td> 
        <td>{doc.website}</td> 
        <td>{doc.school}</td> 
        <td>{doc.control}</td> 
        <button className="btn btn-accent btn-xs" onClick={(e) => getUniId(doc.id)}>Edit</button>
        <button className="btn btn-warning btn-xs" onClick={(e) => deleteHandler(doc.id)}>Delete</button>
        </tr>

            );
        })}
    </tbody> 
    <tfoot>
    pagination 
    </tfoot>
  </table>
</div>
</>
  )
}

export default UniversityList
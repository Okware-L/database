"use client"

import React, {useState, useEffect} from 'react'
import uniDataService from '../app/services/university.add'
import { Alert } from 'react-bootstrap';

export default function UniversityForm({ id, setUniId }) {
    const [ name, setName ] = useState({});
    const [ state, setState ] = useState({});
    const [ school, setSchool ] = useState({});
    const [ control, setControl ] = useState({});
    const [ website, setWebsite ] = useState({});
    const [message, setMessage ] = useState({error: false, msg:""});

    const handleSubmit = async(e) => {

        //prevents refresh on submit
        e.preventDefault();
        setMessage("");
        if(name === "" || state === "" || school === "" || control === "" || website === ""){
            setMessage({error: true, msg: "All feilds required!"});
            return;
        }

        const newUni = {
            name,
            state,
            school,
            control,
            website
        }
        console.log(newUni)

        try{
            await uniDataService.addUni(newUni);
            setMessage({error: false, msg: "New University added successfully"});
        }catch (err){
            setMessage({error: true, msg: err.message});
        }

        setName("");
        setState("");
        setSchool("");
        setControl("");
        setWebsite("");

        
    };

    // complete this function boi
    const editHandler = async() => {
        setMessage("");
        try{
            const docSnap = await uniDataService.getUni(id)
            console.log("the record is :", docSnap.data());
            setName(docSnap.data().name);
            setState(docSnap.data().state);
            setSchool(docSnap.data().school);
            setWebsite(docSnap.data().website);
            setControl(docSnap.data().control);
        }catch(err){
            setMessage({error: true, msg: err.message});
        }
    }
    useEffect(() => {
            if(id !== undefined && id !== ""){
            editHandler();
            }
        }, [id]);
   


  return (
    <> 
    <div className='p-1 m-4'>
    {message?.msg && (
         <Alert
            variant={message?.error ? "alert-warning" : "alert-success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert> 
        )} 
       
           
    </div>
    <div className="form-control w-full bg-base-200 p-5">
    <label className="label">
    <span className="label-text">Add New University Entry</span>
    </label>
    
   

    <form onSubmit={handleSubmit}>
    <input value={name}  type='text' onChange={(e) => setName(e.target.value)} placeholder="Name" className="input  my-2 input-bordered w-full" />
    <input value={state}  type= 'text' onChange={(e) => setState(e.target.value)} placeholder="State" className="input my-2 input-bordered w-full " />
    <input value={school}  type='text' onChange={(e) => setSchool(e.target.value)}  placeholder="School" className="input my-2 input-bordered w-full " />
    <input  value={control}  type='text' onChange={(e) => setControl(e.target.value)} placeholder="Control" className="input my-2 input-bordered w-full " />
    <input value={website}  type='text' onChange={(e) => setWebsite(e.target.value)}  placeholder="Website" className="input my-2 input-bordered w-full " />
    <button className="btn btn-ghost" type='submit'>Add UNIVERSITY</button>
    </form>

    
    
    <a className="link link-accent" href='/dashboard/tasks'>Access full page</a>
   </div>
   </>
  )
}

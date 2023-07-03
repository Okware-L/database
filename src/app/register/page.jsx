"use client"

import React, {useRef, useState} from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import { UserAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function Register() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword ){
      console.log("passwords dont match")
      return;
    }
    try{
      await createUser(email, password)
    }catch(e) {
      setError(e.message)
      console.log(e.message)
    }
  };


 

  return (
   
    <div className='container flex flex-col items-center justify-center h-screen'>
    <div className="">
     <Image
      src={Logo}
      alt="Logo"
      className='w-32'
      />
    </div>

    <form onSubmit={handleSubmit}>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
  </div>
  <div class="mb-6">
    <label onChange={(e) => setPassword(e.target.value)} for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div class="mb-6">
    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

  <div className=''>Already Have An Account ?<Link href='/login'><span className='link link-accent'>Log In</span></Link> </div>
  <div className='btn btn-ghost'>Sign Up With Google</div>
</div>

  )
}

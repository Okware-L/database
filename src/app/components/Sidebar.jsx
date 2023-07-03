import React from 'react'
import Image from 'next/image'
import Chat from '../../../public/chat.png'
import Dash from '../../../public/dashboard.png'
import Bell from '../../../public/bell.png'
import Taskspng from '../../../public/tasks.png'
import Dp from '../../../public/user.png'
import Logo from '../../../public/logo.svg'
import Link from 'next/link'

const sidebar = () => {
  return (
    <div>
    <div className='flex flex-row justify-center p-2'>
    <div className="avatar w-24 ">
     <Image
     src={Logo}
     alt='dp'
     className=''
     />
      </div>
      </div>
<ul className="menu w-60 h-full ">
  <li className='mx-5'>
    <a>
        <Image
        src= {Dash}
        alt=''
        className="h-5 w-5"
        />
    Dashboard
    </a>
  </li>
  <li className='mx-5 my-3'>
    <a>
        <Image
        src= {Bell}
        alt=''
        className="h-5 w-5"
        />
    Notifications
    </a>
  </li>
  <li className='mx-5 my-3'>
    <Link href='/tasks'>
        <Image
        src= {Taskspng}
        alt=''
        className="h-5 w-5"
        />
    Tasks
    </Link>
  </li>
  <li className='mx-5 my-3'>
    <a>
        <Image
        src= {Chat}
        alt=''
        className="h-5 w-5"
        />
    Chat
    </a>
  </li>
  <li className='mx-5 my-3'>
    <a>
        <Image
        src= {Dp}
        alt=''
        className="h-5 w-5"
        />
    Profile
    </a>
  </li>
 
</ul>
    </div>
  )
}

export default sidebar
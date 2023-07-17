import React from 'react'
import Image from 'next/image';
import Logo from '../../public/user.png'
import Bookmark from '../../public/bookmark.png'
import More from '../../public/more.png'
import Feed1 from '../../public/feed1.jpg'
import { FcCollapse, FcExpand } from "react-icons/fc"
//import { Users } from '../app/dummyData'

const Feed = () => {

   // const user = Users.filter(u=>u.id===1)

    //console.log(user[0].username)
  return (
    <div>
    <div className='flex my-1 justify-between'>
            <div className='flex'>
           <Image
            src= {Logo}
            alt='pic'
             className="h-8 w-8"
            />
          <div className='flex flex-col mx-4'>
            <h2 className='font-semibold sm:text-sm'>Lewis Okware</h2>
            <p className='text-xs'>12 Mins ago</p>
          </div>
          </div>

          <div className='flex space-x-3'>
            <Image
            src = {Bookmark}
            alt = 'pic'
            className="h-4 w-4"
            />
             <Image
            src = {More}
            alt = 'pic'
            className="h-4 w-4"
            /> 
          </div>
    </div>
    <div className="divider"></div> 
    <div className='container'>
        <p className='p2 text-sm my-3'>This is the first post, you can share any information you consider important 
            on this feeds page.
        </p>
        <Image
        src = {Feed1}
        alt='/'
        />
            <div className=' flex text-xs my-3'>
                <div>
                    Upvote
                    <FcCollapse/>
                </div>
                
                <div className="divider divider-horizontal"></div>
                <div>
                    Downvote
                    <FcExpand/>
                </div>
            </div>
        <input type="text" placeholder="comment here" className="input input-bordered input-accent w-full max-w-xs input-sm my-2" />
        
        <div className='text-xs p-1 flex my-2'>
            <p>All comments </p>
        </div>
    </div>
    </div>
    
  )
}

export default Feed
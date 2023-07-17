import React from 'react'

const Leftbar = () => {
  return (
    <div>
    <div className='my-2 flex'>
    <div className="stats shadow bg-base-200 mx-1">
  
    <div className="stat">
    <div className="stat-title">Total Page Views</div>
    <div className="stat-value">59,400</div>
    <div className="stat-desc">21% more than last month</div>
    </div>
  
    </div>

    <div className="stats shadow bg-base-200 mx-1">
  
    <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">2,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
    </div>


    </div>
    <div className='bg-base-200 my-2'>
        <h2 className='p-2 flex justify-center'>Buy Crypto</h2>
    </div>
    </div>
  )
}

export default Leftbar
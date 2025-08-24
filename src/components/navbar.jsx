import React from 'react'

const navbar = () => {
  return (
    <div className="bg-gray-800 p-4 text-white justify-between flex items-center">
      <div className='icon flex gap-[10px]'>
        <span className="material-symbols-outlined" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          article
        </span>
        <h1 className='text-2xl font-bold'>YPlanner-Manage youe Plan's</h1>
      </div>
      {/* <div className='title'>
        <ul className='flex gap-10 text-lg font-semibold max-md:hidden'>
          <li className='cursor-pointer hover:font-bold'>Home</li>
          <li className='cursor-pointer hover:font-bold'>Your Task</li>
          <li className='cursor-pointer hover:font-bold'>About</li>
        </ul>
      </div> */}

    </div>
  )
}

export default navbar

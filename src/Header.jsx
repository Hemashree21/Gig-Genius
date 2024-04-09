import React from 'react'

const Header = () => {
  return (
    <div className="w-full flex justify-between px-4 py-4 md:px-32 md:py-6">
        <div className='flex gap-2'><img src="https://cdn-icons-png.flaticon.com/512/114/114880.png" alt="" className='md:h-8 md:w-8 h-6 w-6'/><h1 className='md:text-xl text-lg uppercase'>Brilliant</h1></div>
        <button className='border-2 border-black px-3 py-1 md:px-6 rounded-md'>Log in</button>
    </div>
  )
}

export default Header
import React from 'react'

const Banner = () => {
  return (
    <div className='block m-auto w-11/12 border-b-2 border-black'>
        <div className='lg:text-6xl text-2xl text-center flex flex-col gap-4 mt-10 font-semibold'>
            <p>We're building the </p>
            <p>best place on Earth to learn</p>
            <p>math and science.</p>
        </div>
        <div className='md:flex justify-center mx-10'>
            <div className='md:w-1/4 flex justify-center'><img src="https://cdn-icons-png.flaticon.com/512/12359/12359463.png" alt="" className='h-40 w-60'/></div>
            <div className='md:w-2/5'><p className='text-center text-gray-500 text-md md:text-xl mt-8'>In the process, we've been happy to receive a lot of love from our users</p></div>
            <div className='md:w-1/4 flex justify-center mt-4'><img src="https://cdn-icons-png.flaticon.com/512/2276/2276313.png" alt="" className='ml-8 h-40'/></div>
        </div>
    </div>
  )
}

export default Banner
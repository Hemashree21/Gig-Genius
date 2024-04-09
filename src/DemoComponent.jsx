import React from 'react';
import Dropdown from "./Dropdown";
import img1 from './rocket.png';
import img2 from './review.png';
import star from './star.png';

const DemoComponent = () => {
  return (
    <div className='block m-auto w-11/12 border-b-2 border-black mt-40'>
      <div className='md:flex'>
        <div className='md:w-1/3 flex flex-col justify-between'>
          <div>
          <h1 className='text-4xl font-semibold'>User Reviews</h1>
          <p className='mt-6 text-xl text-gray-500 mr-24'>Over 50,000 5-star reviews in the App Store and Play Store</p>
          </div>
          <div>
          <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
          </div>
          <div>
            <img src={ img1 } alt="" className='w-3/4'/>
          </div>
        </div>
        <div className='md:w-2/3'>
          <div className='border-b-2 border-gray-300 pb-10'>
          <div><img src={img2} alt="" className='w-10/12 mt-4 md:mt-0 md:w-11/12 mx-2 md:mx-4'/></div>
          <div className='flex flex-wrap gap-4 w-full mt-12 mx-2 md:mx-4'>
            <div className='border-2 border-gray-300 text-sm rounded-md uppercase px-5 md:px-8 py-2 md:py-3'>All</div>
            <div className='border-2 border-gray-300 text-sm rounded-md uppercase px-5 md:px-8 py-2 md:py-3'>Students</div>
            <div className='border-2 border-gray-300 text-sm rounded-md uppercase px-5 md:px-8 py-2 md:py-3'>Teachers</div>
            <div className='border-2 bg-blue-100 border-blue-700 text-sm rounded-md uppercase px-5 md:px-8 py-2 md:py-3'>Professionals</div>
            <div className='border-2 border-gray-300 text-sm rounded-md uppercase px-5 md:px-8 py-2 md:py-3'>Parents</div>
            <div className='border-2 border-gray-300 text-sm rounded-md uppercase px-5 md:px-8 py-2 md:py-3'>Life-Long Learners</div>
          </div>
          </div>
          <div className='mt-8'>
            <div className='flex flex-col gap-4 border-b-2 pb-8 border-gray-300'>
            <div className='flex gap-1'>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
            </div>
            <div><p className='font-bold text-lg text-gray-600'>Jacob Snider</p></div>
            <div><p className='text-lg text-gray-500'>Through it's engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.</p></div>
            <div className='rounded-full w-fit px-8 py-2 uppercase border-gray-300 border-2'>Professionals</div>
            </div>
          </div>
          <div className='mt-8'>
            <div className='flex flex-col gap-4 border-b-2 pb-8 border-gray-300'>
            <div className='flex gap-1'>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
            </div>
            <div><p className='font-bold text-lg text-gray-600'>Jacob Snider <span className='text-gray-500 font-normal'>- Google Play</span></p></div>
            <div><p className='text-lg text-gray-500'>Through it's engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.</p></div>
            <div className='rounded-full w-fit px-8 py-2 uppercase border-gray-300 border-2'>Professionals</div>
            </div>
          </div>
          <div className='mt-8'>
            <div className='flex flex-col gap-4 border-b-2 pb-8 border-gray-300'>
            <div className='flex gap-1'>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
            </div>
            <div><p className='font-bold text-lg text-gray-600'>Jacob Snider <span className='text-gray-500 font-normal'>- App Store</span></p></div>
            <div><p className='text-lg text-gray-500'>Through it's engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.</p></div>
            <div className='rounded-full w-fit px-8 py-2 uppercase border-gray-300 border-2'>Professionals</div>
            </div>
          </div>
          <div className='mt-8'>
            <div className='flex flex-col gap-4 border-b-2 pb-8 border-gray-300'>
            <div className='flex gap-1'>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
            </div>
            <div><p className='font-bold text-lg text-gray-600'>Jacob Snider <span className='text-gray-500 font-normal'>- App Store</span></p></div>
            <div><p className='text-lg text-gray-500'>Through it's engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.</p></div>
            <div className='rounded-full w-fit px-8 py-2 uppercase border-gray-300 border-2'>Professionals</div>
            </div>
          </div>
          <div className='mt-8'>
            <div className='flex flex-col gap-4 border-b-2 pb-8 border-gray-300'>
            <div className='flex gap-1'>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
            </div>
            <div><p className='font-bold text-lg text-gray-600'>Jacob Snider <span className='text-gray-500 font-normal'>- App Store</span></p></div>
            <div><p className='text-lg text-gray-500'>Through it's engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.</p></div>
            <div className='rounded-full w-fit px-8 py-2 uppercase border-gray-300 border-2'>Professionals</div>
            </div>
          </div>
          <div className='mt-8'>
            <div className='flex flex-col gap-4'>
            <div className='flex gap-1'>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
              <img src={star} alt="" className='h-6 w-6'/>
            </div>
            <div><p className='font-bold text-lg text-gray-600'>Jacob Snider <span className='text-gray-500 font-normal'>- Google Play</span></p></div>
            <div><p className='text-lg text-gray-500'>Through it's engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.</p></div>
            <div className='rounded-full w-fit px-8 py-2 uppercase border-gray-300 border-2'>Professionals</div>
            </div>
          </div>
          <div className='my-20'><span className='text-gray-700 text-xl'><span>&lt;</span> &nbsp;1&nbsp; of&nbsp; 2&nbsp; <span>&gt;</span></span></div>
        </div>
      </div>
    </div>
  )
}

export default DemoComponent
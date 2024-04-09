import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='bg-black text-white p-10'>
        <div className='md:flex'>
            <div className='md:w-1/2'>
                <div className='flex uppercase text-xl md:mb-0 mb-10'>Brilliant</div>
            </div>
            <div className='md:w-1/2 md:flex'>
                <div className='md:w-1/2'>
                    <p className='text-gray-200'>Company</p>
                    <ul className='text-gray-600 py-4'>
                        <li className='py-1 cursor-pointer'>About Us</li>
                        <li className='py-1 cursor-pointer'>Principles</li>
                        <li className='py-1 cursor-pointer'>Careers</li>
                        <li className='py-1 cursor-pointer'>Educators</li>
                        <li className='py-1 cursor-pointer'>Press</li>
                    </ul>
                </div>
                <div className='md:w-1/2'>
                <p className='text-gray-200'>Product</p>
                    <ul className='text-gray-600 py-4 cursor-pointer'>
                        <li className='py-1 cursor-pointer'>Courses</li>
                        <li className='py-1 cursor-pointer'>Today</li>
                        <li className='py-1 cursor-pointer'>Pricing</li>
                        <li className='py-1 cursor-pointer'>Testimonals</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='block w-3/4 m-auto mt-20'>
            <div className='flex gap-4 justify-center md:justify-end'>
            <FacebookOutlinedIcon className='cursor-pointer'/>
            <InstagramIcon className='cursor-pointer'/>
            <TwitterIcon className='cursor-pointer'/>
            <LinkedInIcon className='cursor-pointer'/>
            </div>
        </div>
        <div className='mt-20 text-gray-600 xl:flex justify-between text-xs lg:text-sm xl:text-md'>
            <div className='mx-2 my-2 xl:my-0 xl:mx-0' href='#link'>Help</div>
            <div className='mx-2 my-2 xl:my-0 xl:mx-0' href='#link'>Terms of Service</div>
            <div className='mx-2 my-2 xl:my-0 xl:mx-0' href='#link'>Privacy Policy</div>
            <div className='mx-2 my-2 xl:my-0 xl:mx-0' href='#link'>California Privacy Policy</div>
            <div className='mx-2 my-2 xl:my-0 xl:mx-0' href='#link'>&copy; 2022 Brilliant Worldwide, Inc, Brilliant and the Brilliant Logo are trademarks of Brilliant Worldwide, Inc.</div>
        </div>
    </div>
  )
}

export default Footer
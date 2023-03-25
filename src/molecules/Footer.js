import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex px-4 sm:px-20 gap-10'>
      <div className='flex flex-col'>
        <div className='uppercase text-blue-500'>Web3 lms</div>
        <div className='capitalize flex flex-col items-start'>
          <span className='text-[.8rem] leading-[1rem] font-medium'>
            &copy; {new Date().getFullYear()} All Rights Reserved
          </span>
          <span className='uppercase text-[.7rem] leading-[1.4rem] font-[400]'>
            privacy - terms
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer

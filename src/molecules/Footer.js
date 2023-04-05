import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const items = [
    {
      linkHead: "Quick Links",
      l1: "https://github.com/",
      l1Text: "Home",
      l2: "https://github.com",
      l2Text: "Catogory",
    },
    {
      linkHead: "Courses",
      l1: "https://github.com/",
      l1Text: "My Courses",
      l2: "https://github.com",
      l2Text: "Achievements",
    },
    {
      linkHead: "Purchases",
      l1: "https://github.com/",
      l1Text: "Cart",
      l2: "https://github.com",
      l2Text: "Top Up",
    },
    {
      linkHead: "Help",
      l1: "https://github.com/",
      l1Text: "support",
      l2: null,
      l2Text: null,
    },
  ];
  return (
    <div className='w-full flex flex-col md:flex-row px-4 md:px-10 py-10 lg:px-20 gap-x-10 gap-y-5 md:space-x-6 bg-slate-50'>
      <div className='flex flex-col space-y-4'>
        <span className='uppercase text-blue-500 text-left whitespace-nowrap'>
          <Link
            to='/'
            className='uppercase text-blue-500 font-bold text-xl leading-3 text-left whitespace-nowrap'
          >
            Web3 lms
          </Link>
        </span>
        <div className='capitalize flex flex-col items-start'> 
          <span className='text-[.8rem] leading-[1.3rem] font-medium whitespace-nowrap'>
            &copy; {new Date().getFullYear()} All Rights Reserved
          </span>
          <span className='uppercase text-[.7rem] leading-[1.4rem] font-[400]'>
            privacy - terms
          </span>
        </div>
      </div>

      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-y-5 md:gap-14 lg:gap-24 place-items-start'>
        {items?.map(({ linkHead, l1, l2, l1Text, l2Text }) => {
          return (
            <div className='' key={linkHead}>
              <h4 className='text-[1.1rem] font-semibold whitespace-nowrap text-left text-gray-800'>
                {linkHead}
              </h4>
              <ul className='text-left'>
                <li className='font-[400] text-[.95rem] text-gray-800'>
                  <NavLink to={l1}>{l1Text}</NavLink>
                </li>
                <li className='font-[400] text-[.95rem] text-gray-800'>
                  <NavLink to={l2}>{l2Text}</NavLink>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;

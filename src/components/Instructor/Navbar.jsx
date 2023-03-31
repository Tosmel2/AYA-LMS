import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Icon,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import {
  Close,
  Menu,
  NotificationsNoneOutlined,
  Person,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Logo from "../../assets/lms_logo.png";



const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className='w-full z-20 bg-white min-h-[2rem] flex flex-col lg:flex-row justify-between px-4 py-4 gap-x-20 ease-in duration-500 border'
      id='navbar'
    >
      <img
        src={Logo}
        alt='Logo'
        className={`${
          showNav ? "hidden" : "visible"
        } w-12 h-12 visible lg:hidden cursor-pointer'`}
        onClick={() => {
          setShowNav(false);
          navigate("/");
        }}
      />
      <div
        className='absolute top-6 right-4 ease-in duration-500 visible lg:hidden'
        onClick={() => setShowNav(!showNav)}
      >
        {!showNav ? (
          <span className='text-gray-600 cursor-pointer'>
            <Menu sx={{ fontSize: "2rem" }} />
          </span>
        ) : (
          <span className='text-gray-600 cursor-pointer'>
            <Close sx={{ fontSize: "2rem" }} />
          </span>
        )}
      </div>

      <div
        className={`${
          showNav ? "!flex" : "hidden"
        } hidden lg:flex flex-col lg:flex-row gap-6 lg:gap-y-0 lg:gap-x-6 lg:items-center w-full lg:w-auto`}
      >
        <img
          src={Logo}
          alt='Logo'
          className='w-12 h-12 cursor-pointer'
          onClick={() => {
            setShowNav(false);
            navigate("/");
          }}
        />
        
      </div>

      <div
        className={`w-full hidden lg:flex flex-col lg:flex-row justify-between py-8 lg:py-0 items-center lg:items-center space-y-7 lg:space-y-0 lg:space-x-10 ease-in duration-500 ${
          showNav ? "!flex" : "hidden"
        }`}
      >
        <ul className='flex flex-col lg:flex-row gap-x-5 space-y-5 lg:space-y-0' style={{border:'2px solid red'}}>
          <li onClick={() => setShowNav(false)}>
            <Box className='capitalize font-semibold text-gray-700 no-underline whitespace-nowrap'>
              
                  <Link
                    p={2}
                    to='explore'
                    fontSize={"lg"}
                    fontWeight={500}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    Course Management
                  </Link>
          
            </Box>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link
              to='/analytics'
              className='capitalize font-semibold text-gray-700 no-underline cursor-pointer whitespace-nowrap'
            >
              Analytics
            </Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link
              to='/support'
              className='capitalize font-semibold text-gray-700 no-underline cursor-pointer whitespace-nowrap'
            >
              Support
            </Link>
          </li>
          
        </ul>
        <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={500}
            color={'white'}
            bg={useColorModeValue('#197DDA', '#FAD744')}
            href={'/course'}
            _hover={{
              bg: 'blue.400',
            }}>
            Create a course
          </Button>

        <div className='flex flex-col lg:flex-row lg:items-center space-y-7 lg:space-y-0'>
          <div className='space-x-6 flex'>
            <span className='text-gray-600 relative'>
              <span className='absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full'></span>
              <ShoppingCartOutlined sx={{ fontSize: "1.7rem" }} />
            </span>
            <span className='text-gray-600 relative'>
              <span className='absolute top-[.1rem] right-[.3rem] h-2 w-2 bg-blue-500 rounded-full'></span>
              <NotificationsNoneOutlined sx={{ fontSize: "1.8rem" }} />
            </span>
          </div>

          <div className='flex items-center gap-3 lg:px-6'>
            <div className='bg-blue-500 rounded-full p-1 '>
              <Person className='text-white' sx={{ fontSize: "2.2rem" }} />
            </div>
            <span className='font-medium text-gray-600 whitespace-nowrap'>
              John Doe <Icon
                      as={ChevronDownIcon}
                      transition={"all .25s ease-in-out"}
                      w={6}
                      h={6}
                    />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

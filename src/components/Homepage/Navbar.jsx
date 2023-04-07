import React, { useState } from "react";
import { ChevronDownIcon} from "@chakra-ui/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
  Button,
  // Flex,
  // HStack,
  // VStack,
  // Avatar,
  // // Image,
  // Text,
  // useDisclosure,
  // Menu,
  // MenuButton,
  // MenuDivider,
  // MenuItem,
  // MenuList,

} from "@chakra-ui/react";
// import {
//   FiChevronDown
// } from 'react-icons/fi';
import {
  Close,
  Menu,
  NotificationsNoneOutlined,
  Person,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Logo from "../../assets/lms_logo.png";
// import SearchResult from "./Page/Course/SearchResult";

const navitems = [
  {
    id: 1,
    head: "DECENTRALIZED APPS (DAPPS)",
    linkTexts: [
      "Finance and DeFi",
      "Gaming and Entertainment",
      "Social Networks and Communication",
      "Identity and Authentication",
      "File Sharing and Storage",
    ],
    linkDir: ["/", "/", "/", "/", "/"],
  },
  {
    id: 2,
    head: "DECENTRALIZED INFRASTRUCTURE",
    linkTexts: [
      "Blockchain Protocols",
      "Layer 2 Solutions",
      "Interoperability Protocols",
      "Decentralized Storage",
    ],
    linkDir: ["/", "/", "/", "/"],
  },
  {
    id: 3,
    head: "DECENTRALIZED INFRASTRUCTURE",
    linkTexts: [
      "Decentralized Computing",
      "Decentralized Exchanges (DEXs)",
      "Decentralized Lending and Borrowing Protocols",
      "Yield Farming and Liquidity Mining",
      "Stablecoins and Synthetic Assets",
      "Prediction Markets and Oracles",
    ],
    linkDir: ["/", "/", "/", "/"],
  },
  {
    id: 4,
    head: "DECENTRALIZED IDENTITY",
    linkTexts: [
      "Self-Sovereign Identity (SSI)",
      "Decentralized Identity Verification and Attestation",
      "Decentralized Authentication and Authorization",
      "Privacy-Enhancing Technologies (PETs)",
    ],
    linkDir: ["/", "/", "/", "/"],
  },
  {
    id: 5,
    head: "WEB3 Tools and INFRASTRUCTURE",
    linkTexts: [
      "Wallets and Key Management",
      "Smart Contract Development Tools",
      "Analytics and Data Providers",
      "Decentralized Oracles and Data Feeds",
    ],
    linkDir: ["/", "/", "/", "/"],
  },
];

const Navbar = () => {
  const firstname = sessionStorage.getItem('firstname');
  const lastname = sessionStorage.getItem('lastname');
  // const user = JSON.parse(sessionStorage.getItem('user')) 
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();


  // const url = `http://localhost:5000/api/v1/courses`;

  // const [searchQuery, setSearchQuery] = useState('');
  // const [courses, setCourses] = useState([]);

  // const handleSearch = () => {
  //   navigate("/search-results");
  //   const searchUrl = `${url}/search?q=${encodeURIComponent(searchQuery)}`;
  //   fetch(searchUrl)
  //     .then(response => response.json())
  //     .then(data => setCourses(data.results))
  //     .catch(error => console.log(error));
  // };

  // const url = `http://localhost:5000/api/v1/courses/search`;

  // const SearchResult = () => {
  //   const [searchQuery, setSearchQuery] = useState('');
  //   const [courses, setCourses] = useState([]);
  
  //   const handleSearch = () => {
  //     const searchUrl = `${url}/search?q=${encodeURIComponent(searchQuery)}`;
  //     fetch(searchUrl)
  //       .then(response => response.json())
  //        .then(data => setCourses(data.results))
  //       .catch(error => console.log(error));
  //   };

    
  return (
    <div
      className='w-full fixed top-0 z-20 bg-white min-h-[2rem] flex flex-col lg:flex-row justify-between px-4 py-4 gap-x-20 ease-in duration-500 border'
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
        <form className='w-full flex flex-row items-center lg:justify-center px-0 gap-0'>
        <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={500}
            color={'white'}
            bg={useColorModeValue('#197DDA', '#FAD744')}
            href={'/search-results'}
            _hover={{
              bg: 'blue.400',
            }}>
            Find a course
          </Button>
          {/* <input
            type='text'
            placeholder='Find a course'
            className='border border-r-0 rounded-sm rounded-r-none p-2 text-gray-600 lg:max-w-[19rem] w-full lg:w-80 mx-0'
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button className='bg-blue-500 w-fit h-fit p-[.57rem] rounded-l-none rounded-sm my-1'>
            <SearchIcon onClick={handleSearch}/>
          </button> */}
        </form>
      </div>

      <div
        className={`w-full hidden lg:flex flex-col lg:flex-row justify-between py-8 lg:py-0 items-start lg:items-center space-y-7 lg:space-y-0 lg:space-x-10 ease-in duration-500 ${
          showNav ? "!flex" : "hidden"
        }`}
      >
        <ul className='flex flex-col lg:flex-row gap-x-5 space-y-5 lg:space-y-0'>
          <li onClick={() => setShowNav(false)}>
            <Box className='capitalize font-semibold text-gray-700 no-underline whitespace-nowrap'>
              <Popover
                trigger={"hover"}
                placement='bottom-start'
                className='absolute top-0 left-0 bg-red-300 z-30'
              >
                <PopoverTrigger>
                  <Link
                    p={2}
                    to='explore'
                    fontSize={"lg"}
                    fontWeight={500}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    Explore Cateory
                    <Icon
                      as={ChevronDownIcon}
                      transition={"all .25s ease-in-out"}
                      // transform={isOpen ? 'rotate(180deg)' : ''}
                      w={6}
                      h={6}
                    />
                  </Link>
                </PopoverTrigger>

                <PopoverContent className='!grid !grid-cols-1 md:!grid-cols-3 !gap-10 sm:!gap-5 p-5 !w-full max-h-[35rem] overflow-auto'>
                  {navitems.map(({ head, linkTexts, linkDir, id }) => {
                    return (
                      <div className='max-w-[20rem] w-fit' key={id}>
                        <h4 className='text-blue-500 font-semibold uppercase text-[.7rem] whitespace-nowrap py-1'>
                          {head}
                        </h4>
                        <hr className='border-t-2' />

                        <ul>
                          {linkTexts.map((link, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  to={linkDir[index]}
                                  className='font-medium text-xs text-gray-800'
                                >
                                  {link}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </PopoverContent>
              </Popover>
            </Box>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link
              to='/courses/mycourse'
              className='capitalize font-semibold text-gray-700 no-underline cursor-pointer whitespace-nowrap'
            >
              My Courses
            </Link>
          </li>
          <li onClick={() => setShowNav(false)}>
            <Link
              to='/achievements'
              className='capitalize font-semibold text-gray-700 no-underline cursor-pointer whitespace-nowrap'
            >
              Achievements
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

          {/* <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark </Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex> */}

          <div className='flex items-center gap-3 lg:px-6'>
            <div className='bg-blue-500 rounded-full p-1 '>
              <Person className='text-white' sx={{ fontSize: "2.2rem" }} />
            </div>
            <span className='font-medium text-gray-600 whitespace-nowrap'>
            {/* <NavLink to="/profile">John Doe</NavLink> */}
            <NavLink to="/profile">{firstname} {lastname}</NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
      // };
};

export default Navbar;

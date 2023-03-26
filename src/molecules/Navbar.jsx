// import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import lms_logo from '../../assets/lms_logo.png';

// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   Image,
//   // useColorMode,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   // useBreakpointValue,
//   useDisclosure,
// } from '@chakra-ui/react';
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons';
// // import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// // import ButtonBox from './ButtonBox';

// export default function WithSubnavigation() {
//   // const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box bg={useColorModeValue('gray.100', 'gray.100')} >
//       <Flex
//       spacing={6}
//         bg={useColorModeValue('gray.50', 'gray.900')}
//         color={useColorModeValue('#000000', '#000')}
//         minH={'70px'}
//         py={{ base: 4 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={'normal'}
//         borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}>
//         <Flex
//           flex={{ base: 1, md: 'auto' }}
//           ml={{ base: -2 }}
//           display={{ base: 'flex', md: 'none' }}>
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />
//             }
//             variant={'ghost'}
//             aria-label={'Toggle Navigation'}
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: 'space-evenly', md: 'space-around' }}>
//         <Box display="flex" alignItems="center">
//           <Image src={lms_logo} alt="Logo" boxSize="40px" objectFit="contain" />
//         </Box>

//           <Box display={{ base: 'none', md: 'block' }}>
//             <InputGroup>
//               <InputRightElement
//                 cursor="pointer"
//                 bg={'#197DDA'}
//                 pointerEvents="cursor"
//                 children={<SearchIcon color="gray.50" />}
//               />
//               <Input type="text" placeholder="Find A Course" />
//             </InputGroup>
//             </Box>

//           <Flex display={{ base: 'none', md: 'flex' }} ml={2}>
//             <DesktopNav />
//           </Flex>
//         </Flex>

//         <Stack
//           flex={{ base: 1, md: 0 }}
//           justify={'flex-end'}
//           direction={'row'}
//           spacing={6}>
//           {/* <Button onClick={toggleColorMode}>
//               {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//           </Button> */}
//           <Button
//             display={{ base: 'none', md: 'inline-flex' }}
//             fontSize={'md'}
//             fontWeight={500}
//             color={'white'}
//             bg={useColorModeValue('#197DDA', '#FAD744')}
//             href={'#contact'}
//             _hover={{
//               bg: 'blue.400',
//             }}>
//             sign up
//           </Button>
//           <Button
//             as={'a'}
//             color={'#197DDA'}
//             fontSize={'md'}
//             fontWeight={500}
//             variant={'outline'}
//             href={'#'}>
//             Login
//           </Button>
//         </Stack>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   );
// }

// const DesktopNav = () => {
//   const linkColor = useColorModeValue('gray.600', 'gray.200');
//   const linkHoverColor = useColorModeValue('gray.800', 'white');
//   const popoverContentBgColor = useColorModeValue('white', 'gray.800');

//   return (
// <Stack direction={'row'} spacing={5} pt={2}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label} >
//           <Popover trigger={'hover'} placement={'bottom-start'}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? '#'}
//                 fontSize={'lg'}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: 'none',
//                   color: linkHoverColor,
//                 }}>
//                 {navItem.label} <Icon
//                 as={ChevronDownIcon}
//                 transition={'all .25s ease-in-out'}
//                 // transform={isOpen ? 'rotate(180deg)' : ''}
//                 w={6}
//                 h={6}
//               />
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={'xl'}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={'xl'}
//                 minW={'sm'}>
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}

//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={'group'}
//       display={'block'}
//       p={2}
//       rounded={'md'}
//       _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
//       <Stack direction={'row'} align={'center'}>
//         <Box>
//           <Text
//             transition={'all .3s ease'}
//             _groupHover={{ color: 'blue.400' }}
//             fontWeight={500}>
//             {label}
//           </Text>

//           <Text fontSize={'sm'}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={'all .3s ease'}
//           transform={'translateX(-10px)'}
//           opacity={0}
//           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//           justify={'flex-end'}
//           align={'center'}
//           flex={1}>
//           <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <>
//       <Box display={{ base: 'block', md: 'none' }}
//       p={2}
//       bg={useColorModeValue('white', 'gray.800')}
//       >
//       <InputGroup>
//         <InputRightElement
//           cursor="pointer"
//           bg={'#197DDA'}
//           pointerEvents="cursor"
//           children={<SearchIcon color="gray.50" />}
//         />
//         <Input type="text" placeholder="Find A Course" />
//       </InputGroup>
//       </Box>
//     <Stack
//       bg={useColorModeValue('white', 'gray.800')}
//       p={4}
//       display={{ md: 'none' }}>
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//     </>

//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? '#'}
//         // flexDirection={'column'}
//         justify={'space-between'}
//         align={'start'}
//         _hover={{
//           textDecoration: 'none',
//         }}>

//         <Text
//           fontWeight={600}
//           color={useColorModeValue('gray.600', 'gray.200')}>
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={'all .25s ease-in-out'}
//             transform={isOpen ? 'rotate(180deg)' : ''}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.700')}
//           align={'center'}>
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>

//   );
// };

// const NAV_ITEMS = [
//   {
//     label: 'Explore Category',
//     href: '/about',
//     children: [
//       {
//         label: 'Low cost. High quality.',
//         subLabel: 'Food that tells a story.',
//         href: '#',
//       },
//       {
//         label: 'Where every flavor tells a story.',
//         subLabel: 'Creativity is always on our menu.',
//         href: '#',
//       },
//     ],
//   },
//   {
//     label: 'Become an Instructor',
//     href: '/instructor',
//   },
//   // {
//   //   label: 'CART',
//   //   href: '/cart',
//   // },
//   // {
//   //   label: 'CONTACT US',
//   //   href: '/#contact',
//   // },
// ];
import React, { useState } from "react";
import Logo from "../assets/lms_logo.png";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  Close,
  Menu,
  NotificationsNoneOutlined,
  Person,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import User from "../assets/user.png";

const navitems = [
  {
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
  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate()

  return (
    <div className='w-full fixed top-0 z-20 bg-white min-h-[2rem] flex flex-col lg:flex-row justify-between px-4 py-4 gap-x-20 ease-in duration-500'>
      <img
        src={Logo}
        alt='Logo'
        className={`${
          showNav ? "hidden" : "visible"
        } w-12 h-12 visible lg:hidden cursor-pointer'`}
        onClick={() => navigate("/")}
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
          onClick={() => navigate("/")}
        />
        <form className='w-full flex flex-row items-center lg:justify-center px-0 gap-0'>
          <input
            type='text'
            placeholder='Find a course'
            className='border border-r-0 rounded-sm rounded-r-none p-2 text-gray-600 lg:max-w-[19rem] w-full lg:w-80 mx-0'
          />

          <button className='bg-blue-500 w-fit h-fit p-[.57rem] rounded-l-none rounded-sm my-1'>
            <SearchIcon />
          </button>
        </form>
      </div>

      <div
        className={`w-full hidden lg:flex flex-col lg:flex-row justify-between py-8 lg:py-0 items-start lg:items-center space-y-7 lg:space-y-0 lg:space-x-10 ease-in duration-500 ${
          showNav ? "!flex" : "hidden"
        }`}
      >
        <ul className='flex flex-col lg:flex-row gap-x-5 space-y-5 lg:space-y-0'>
          <li>
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
                  {navitems.map(({ head, linkTexts, linkDir }) => {
                    return (
                      <div className='max-w-[20rem] w-fit' key={head}>
                        <h4 className='text-blue-500 font-semibold uppercase text-[.7rem] whitespace-nowrap py-1'>
                          {head}
                        </h4>
                        <hr className='border-t-2' />

                        <ul>
                          {linkTexts.map((link, index) => {
                            return (
                              <li>
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
          <li>
            <Link
              to='/course'
              className='capitalize font-semibold text-gray-700 no-underline cursor-pointer whitespace-nowrap'
            >
              My Courses
            </Link>
          </li>
          <li>
            <Link
              to='/achievements'
              className='capitalize font-semibold text-gray-700 no-underline cursor-pointer whitespace-nowrap'
            >
              Achievements
            </Link>
          </li>
          <li>
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

          <div className='flex items-center gap-3 lg:px-6'>
            <div className='bg-blue-500 rounded-full p-1 '>
              <Person className='text-white' sx={{ fontSize: "2.2rem" }} />
            </div>
            <span className='font-medium text-gray-600 whitespace-nowrap'>
              John Doe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

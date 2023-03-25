import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import lms_logo from '../../assets/lms_logo.png';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  Image,
  // useColorMode,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  // useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import ButtonBox from './ButtonBox';

export default function WithSubnavigation() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.100')} >
      <Flex
      spacing={6}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('#000000', '#000')}
        minH={'70px'}
        py={{ base: 4 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'normal'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'space-evenly', md: 'space-around' }}>
        <Box display="flex" alignItems="center">
          <Image src={lms_logo} alt="Logo" boxSize="40px" objectFit="contain" />
        </Box>

          <Box display={{ base: 'none', md: 'block' }}>
            <InputGroup>
              <InputRightElement
                cursor="pointer"
                bg={'#197DDA'}
                pointerEvents="cursor"
                children={<SearchIcon color="gray.50" />}
              />
              <Input type="text" placeholder="Find A Course" />
            </InputGroup>
            </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={2}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {/* <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button> */}
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={500}
            color={'white'}
            bg={useColorModeValue('#197DDA', '#FAD744')}
            href={'#contact'}
            _hover={{
              bg: 'blue.400',
            }}>
            sign up
          </Button>
          <Button
            as={'a'}
            color={'#197DDA'}
            fontSize={'md'}
            fontWeight={500}
            variant={'outline'}
            href={'#'}>
            Login
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
<Stack direction={'row'} spacing={5} pt={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label} <Icon
                as={ChevronDownIcon}
                transition={'all .25s ease-in-out'}
                // transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
              />
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                  
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}>
            {label}
          </Text>
          
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <>
      <Box display={{ base: 'block', md: 'none' }} 
      p={2}
      bg={useColorModeValue('white', 'gray.800')}
      >
      <InputGroup>
        <InputRightElement
          cursor="pointer"
          bg={'#197DDA'}
          pointerEvents="cursor"
          children={<SearchIcon color="gray.50" />}
        />
        <Input type="text" placeholder="Find A Course" />
      </InputGroup>
      </Box>
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
    </>

  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        // flexDirection={'column'}
        justify={'space-between'}
        align={'start'}
        _hover={{
          textDecoration: 'none',
        }}>

        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'center'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
    
  );
};



const NAV_ITEMS = [
  {
    label: 'Explore Category',
    href: '/about',
    children: [
      {
        label: 'Low cost. High quality.',
        subLabel: 'Food that tells a story.',
        href: '#',
      },
      {
        label: 'Where every flavor tells a story.',
        subLabel: 'Creativity is always on our menu.',
        href: '#',
      },
    ],
  },
  {
    label: 'Become an Instructor',
    href: '/instructor',
  },
  // {
  //   label: 'CART',
  //   href: '/cart',
  // },
  // {
  //   label: 'CONTACT US',
  //   href: '/#contact',
  // },
];
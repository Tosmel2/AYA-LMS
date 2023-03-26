// import React from 'react';
import footer_logo from '../assets/footer_logo.png';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.100')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={4}>
          <Box display="flex" alignItems="center" >
            <Image src={footer_logo} alt="Logo" w={150} h={50} mb={0} objectFit="contain" style={{border:'2px solid red'}}/>
        </Box>
            <Text fontSize={'sm'}  mt={0} >
              © 2023 All rights reserved <br />
             <span style={{fontSize:'10px'}}>PRIVACY - TERMS</span>
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><Text as='b'>Quick Links</Text></ListHeader>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Categories</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><Text as='b'>Courses</Text></ListHeader>
            <Link href={'#'}>My Courses</Link>
            <Link href={'#'}>Achievements</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><Text as='b'>Purchases</Text></ListHeader>
            <Link href={'#'}>Cart</Link>
            <Link href={'#'}>Top Up</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><Text as='b'>Help</Text></ListHeader>
            <Link href={'#'}>Support</Link>
            <Link href={'#'}>Terms of Service</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
import React from 'react'
import { 
  Text,
  Stack, 
  useColorModeValue,
  Box,
  Button, 
  Flex,
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
import instructorhero from '../../assets/instructor-hero.png'

const Hero = ({href}) => {
  return (
    <>
    <Flex
    h={'100vh'}
    >
    <Box
    bg={useColorModeValue('#197DDA', '#197DDA')}
    w={['100%','50%']}
    display="flex" alignItems="center"
    >
      <Stack 
      px={['4', '16']}
      color={'white'}
      >
        <Text as='b' fontSize={['4xl', '5xl']} my={0} py={0} spacing={1} style={{lineHeight:'1.2'}}>Learn Web3 the <br />right way</Text>
        {/* <Text as='b' fontSize={['4xl', '5xl']} mt={0}>right way</Text> */}
        <Text fontSize='xl'>Get ahead of your peers With curated web3 courses</Text>
        <Button as={'as'} size="md" color={'#197DDA'} w={'40%'} ><NavLink to="/register" style={{color:'#197DDA'}}>Get Started</NavLink></Button>
      </Stack>
    </Box>
    <Box 
     bgImage={instructorhero}
     bgPosition="center"
     bgRepeat="no-repeat"
     w={'50%'}
      h={'100%'}
      display={['none','block']}
    />
    
    </Flex>

    
    </>

    
  )
}

export default Hero
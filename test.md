import {React,useState} from 'react'
import {
  Flex,
  Box,
  Stack,
  Link,
  Checkbox,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from "react-router-dom"

import { useNavigate } from "react-router"


import lms2_logo from '../assets/lms2_logo.png';
import lms_logo from '../assets/lms_logo.png';


const MetamaskReg = () => {
  const [status, setStatus] = useState(true)
  const [address, setAddress] = useState("")
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = async () => {
    try {
      if(window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const account = accounts[0]
      setAddress(account)
      setIsConnected(true)
      } else {
        alert("Please install Metamask")
      }
  } catch (error) {
      alert(error?.message)
  }
}
  const navigate = useNavigate()
 
}
  return (
    <>
      <Flex
      h={'100vh'}
      >
      <Box 
      position='absolute'
      top='10'
      left='14'
      display={['none', 'block']}
      >
        <Image src={lms2_logo} alt="Logo" boxSize="40px" objectFit="contain" />
      </Box>
      <Box 
      position='absolute'
      top='8'
      left='8'
      display={['block', 'none']}
      >
        <Image src={lms_logo} alt="Logo" boxSize="40px" objectFit="contain" />
      </Box>
      <Box
      bg={useColorModeValue('#197DDA', '#197DDA')}
      w={['100%','48%']}
      display={['none', 'flex']}
      alignItems="center"
      >
      <Stack 
      px={['4', '16']}
      color={'white'}
      >
        <Text as='b' fontSize={['3xl', '4xl']} my={0} py={0} spacing={1} style={{lineHeight:'1.2'}}>Learn Web3 the <br />right way</Text>
        <Text fontSize='xl'>Join millions of learners in the Web3 space</Text>
      </Stack>
      </Box>

      <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={['100%','52%']}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      px={18}>

      <Box w={['100%', '60%']}>
     

      
      </Box>

        <h1>MetamaskReg</h1>
        <button onClick={connectWallet}>Connect Wallet</button>
   
      </Box>
      </Flex>
    </>
  )
}

export default MetamaskReg







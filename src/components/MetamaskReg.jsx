import React, { useState } from 'react'
import {
  Flex,
  Box,
  Stack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ToastContainer, toast } from "react-toastify";
// import ethers from 'ethers';
import { Provider, ethers } from 'ethers';
// import { NavLink } from "react-router-dom"

// import { useNavigate } from "react-router"


import lms2_logo from '../assets/lms2_logo.png';
import lms_logo from '../assets/lms_logo.png';

const MetamaskReg = () => {
  const [walletAddress, setWalletAddress] = useState("");
  async function requestAccount(){

    console.log("Requesting account.....");
    if (window.ethereum){
      console.log('detected');

      try{
        const accounts= await window.ethereum.request({method:"eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    }catch (error){
        console.log('Error connecting...');
      }

    } else {
      toast.warning("Please install Metamask")
      // alert('Metamask not detected');
  }
}
// async function connectWallet(){
//   if(typeof window.ethereum !== 'undefined'){
//     await requestAccount();

//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//   }
// }


  // const [address, setAddress] = useState("")
  // const [isConnected, setIsConnected] = useState(false)

  // const navigate = useNavigate()

  // const connectWallet = async () => {
  //   try {
  //     if(window.ethereum) {
  //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //     const account = accounts[0]
  //     setAddress(account)
  //     setIsConnected(true)
  //     } else {
  //       toast.warning("Please install Metamask")
  //         // alert("Please install Metamask")
  //       }
  //   } catch (error) {
  //       alert(error?.message)
  //   }
  // }

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
        <ToastContainer />
     
        <button onClick={requestAccount}>Connect Wallet</button>
        <h3>Wallet Address:{walletAddress}</h3>
      
      </Box>

        
   
      </Box>
      </Flex>
    </>
  )
}

export default MetamaskReg
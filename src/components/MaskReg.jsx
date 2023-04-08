import React, { useState } from 'react';
import {
  Flex,
  Box,
  Stack,
  Image,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
// import { ethers, BrowserProvider } from 'ethers';
// import contractAbi from '../contractAbi';
import contractAbi from "../molecules/contractAbi";
import lms2_logo from '../assets/lms2_logo.png';
import lms_logo from '../assets/lms_logo.png';



// import React, { useState } from 'react';
import { ethers, BrowserProvider } from 'ethers';
// import contractAbi from '../contractAbi';

const MaskReg = () => {
  const [walletAddress, setWalletAddress] = useState("");
  async function requestAccount() {
    console.log("Requesting account.....");
    if (window.ethereum) {
      console.log('detected');
      const provider = new BrowserProvider(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log('Connected to wallet:', address);
        setWalletAddress(address);
      } catch (err) {
        console.error(err);
      }
    }
  }
  const connectWallet = async () => {
    await requestAccount();
    const contractAddress = '0x75436215885F5D19F4482681bfe1D85CBDE28a16'; // The address of your smart contract
    const contractAbi2 = []; // The ABI of your smart contract
    contractAbi2.push(contractAbi);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);
    // Call a function on your smart contract
    const value = 100;
    const tx = await contract.someFunction(value);
    await tx.wait();
  };

  
  return (
    <>
      <Flex h={'100vh'}>
        <Box position='absolute' top='10' left='14' display={['none', 'block']}>
          <Image src={lms2_logo} alt="Logo" boxSize="40px" objectFit="contain" />
        </Box>
        <Box position='absolute' top='8' left='8' display={['block', 'none']}>
          <Image src={lms_logo} alt="Logo" boxSize="40px" objectFit="contain" />
        </Box>
        <Box
          bg={useColorModeValue('#197DDA', '#197DDA')}
          w={['100%', '48%']}
          display={['none', 'flex']}
          alignItems="center">
          <Stack px={['4', '16']} color={'white'}>
            <Text
              as='b'
              fontSize={['3xl', '4xl']}
              my={0}
              py={0}
              spacing={1}
              style={{ lineHeight: '1.2' }}>
              Learn Web3 the <br />
              right way
            </Text>
            <Text fontSize='xl'>
              Join millions of learners in the Web3 space
            </Text>
          </Stack>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={['100%', '52%']}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          px={18}>
          <Box w={['100%', '60%']}>
            <ToastContainer />

            {/* Connect Wallet button */}
            {/* <button
            onClick={connectWallet}>Connect Wallet</button> */}

            <Button
              size='lg'
              height='48px'
              width='200px'
              border='2px'
              borderColor='blue.500'
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>

            {/* <button onClick={requestAccount}>Connect Wallet</button> */}
            <h3>Wallet Address: {walletAddress}</h3>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default MaskReg;







import {React,useState} from 'react'
import {
  Flex,
  Box,
  Stack,
  // Link,
  // Checkbox,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from "react-router-dom"

import { useNavigate } from "react-router"
import axios from "axios"
import Swal from "sweetalert2"

import lms2_logo from '../../assets/lms2_logo.png';
import lms_logo from '../../assets/lms_logo.png';
// import HomeNavbar from './HomeNavbar';

const ForgetPassword = () => {
  const [status, setStatus] = useState(true)
  const [user, setUser] = useState({
      email: "",
  })

  
  const navigate = useNavigate()
  const url = `http://localhost:5000/api/v1/user/forgot-password`

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(false)

    axios.post(url, user)
    .then((res) => {
        if(res.data.status === "error"){
            setStatus(true)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data.message
            });
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: "Password reset email sent",
                showConfirmButton: false,
                timer: 1500
            });
              setTimeout(() => {
                  navigate("/login");
              }, 1500)
        }
    }).catch(error => {
        console.log(error.message) 
        setStatus(true)
    })
}
  return (
    <>
        {/* <HomeNavbar /> */}
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
          <Stack textAlign={['center', 'start']} mb='10'>
            <Heading fontSize={'3xl'} >Password Reset</Heading>
          </Stack>
          <form action="" method="POST" onSubmit={(e) => handleSubmit(e)} >

               {/* <label for="email">Email</label> */}
               <input type="email" name="email" id="email" value={user["email"]} onChange={(e) => setUser({...user, email: e.target.value})} disabled={!status ? true : false} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-4 my-2" placeholder="Enter Email Address" required />
         
            
               <button className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3">Send Reset Link</button>
              
                <Text align={'center'}>
                  <NavLink to="/login" style={{color:'#197DDA'}}>Back to login</NavLink>
                </Text>
            
             </form>
          </Box>
          
      </Box>
      </Flex>
    </>
  )
}

export default ForgetPassword
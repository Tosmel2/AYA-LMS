// import React from 'react'
// // import Navbar from '../../components/Homepage/Navbar';
// // import Footer from '../../components/Footer'
// import '../adminStyles/login.css'
// import Logo from '../../assets/lms_logo.png'
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//     const navigate = useNavigate()
    
//   return (
//     <>
//       <div className="main-wrap">
//         <div className="left">
//           <div className="lhldr">
//             <div className="imgwrp">
//               <img src={Logo} alt="Logo" onClick={() => navigate('/')} />
//             </div>
//           </div>
//           <div className="intro">
//             <p className="big">Learn Web3 the right way</p>
//             <p className="small">Join millions of learners in the Web3 space</p>
//           </div>
//         </div>
//         <div className="right">
//           <div className="logbox">
//             <div className="loghead">
//               <p> Sign Up</p>
//               <p className="logtwo">Please, fill in details to continue</p>
//             </div>
//             <form>
//             <label for="firstame">First Name</label>
//               <input type="firstname" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-4" placeholder="First Name" required=""/>
//               <label for="lastame">First Name</label>
//               <input type="lastname" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-4" placeholder="Last Name" required=""/>
//               <label for="email">Email</label>
//               <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-4" placeholder="name@company.com" required=""/>
//               <label id="pass">Password</label>
//               <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/5 p-4" placeholder="xxxxxxx" required=""/>
//               <a href="">Forgot Paswword?</a>
//               <button className="w-72 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
//             </form>
//             <div className="signup">
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Register


import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
  // Link,
} from '@chakra-ui/react';
import { useState } from 'react';
// import { NavLink } from "react-router-dom"
// import axios from "axios";
// import Swal from "sweetalert2";
// import {useNavigate} from "react-router"
import lms2_logo from '../assets/lms2_logo.png';
import lms_logo from '../assets/lms_logo.png';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Register() {
  const [status] = useState(true)
  const[user, setUser] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
  })


  const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate()

//   const url = `https://localhost:5000/api/v1/users/register`

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus(false)

//     axios.post(url, user)
//     .then((res) => {
//         if(res.data.status === "error"){
//             setStatus(true)
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: res.data.message
//             });
//         }else{
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success',
//                 text: "Account Creation Successful",
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//               setTimeout(() => {
//                   navigate("/signin");
//               }, 1500)
//         }
//     }).catch(error => {
//         console.log(error.message) 
//         setStatus(true)
//     })
// }


  return (
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
      top='6'
      left='6'
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
      w={['100%','52%']}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow={'lg'}
      >
        <Box w={['90%', '65%']} >
        <Stack align={['center', 'start']} >
          <Heading fontSize={'3xl'} >
            Register
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            To enjoy all of our amazing courses ✌️
          </Text>
          <Stack spacing={4} w={'100%'}>
                <FormControl id="firstName" isRequired>
                  <Input type="text" 
                  placeholder="First Name" 
                  value={user["firstname"]} 
                  onChange={(e) => setUser({...user, firstname: e.target.value})} 
                  disabled={!status ? true : false} required/>
                </FormControl>
                <FormControl id="lastName" isRequired>
                  <Input type="text" 
                  placeholder="Last Name" 
                  value={user["lastname"]} 
                  onChange={(e) => setUser({...user, lastname: e.target.value})} 
                  disabled={!status ? true : false} required/>
                </FormControl>
            <FormControl id="email" isRequired>
              <Input type="email" 
              placeholder="Your Email Address" 
              value={user["email"]} 
              onChange={(e) => setUser({...user, email: e.target.value})} 
              disabled={!status ? true : false} required/>
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input placeholder="Password" type={showPassword ? 'text' : 'password'} value={user["password"]} onChange={(e) => setUser({...user, password: e.target.value})} disabled={!status ? true : false} required/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Continue
              </Button>
            </Stack>
            <Stack pt={4}>
              <Text align={'center'}>
                Already a user? <Link to="/login" style={{color:'#197DDA'}}>Login</Link>
              </Text>
            </Stack>
            <Text fontSize='md' color={'gray.600'} textAlign={'center'} >By continuing you agree to our <span style={{color:'#197DDA'}}>Terms and Conditions </span>
            and consent to its <span style={{color:'#197DDA'}}>Privacy Policy</span>
          </Text>
          </Stack>
      </Stack>
      </Box>
      </Box>        
    </Flex>
  );
}
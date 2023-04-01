import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  // FormControl,
  // Input,
  // InputGroup,
  // InputRightElement,
  Stack,
  // Button,
  Heading,
  Checkbox,
  Image,
  Text,
  useColorModeValue,
  // Link,
} from '@chakra-ui/react';
import { useState } from 'react';
// import { NavLink } from "react-router-dom"
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router"
import lms2_logo from '../../assets/lms2_logo.png';
import lms_logo from '../../assets/lms_logo.png';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Register() {
  const [status, setStatus] = useState(true)
  const[user, setUser] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
  })

  const [type , setType] = useState({visible: false, input:"password"});
  function tooglePassword() {
    setType((value)=>{
      return {
        ...value,
        visible : !value.visible,
        input : !value.visible ? "text" : "password"
      }
    })
  }

  // const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const url = `https://ayapod5-be.onrender.com/api/v1/user/instructor/register`
  // const url = `https://aya-project-prod.vercel.app/api/v1/users/register`

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
          localStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: "Account Creation Successful",
                showConfirmButton: false,
                timer: 1500
            });
              setTimeout(() => {
                  navigate("/instructor/login");
              }, 1500)
        }
    }).catch(error => {
        console.log(error.message) 
        setStatus(true)
    })
}


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
        <Box w={['90%', '60%']}>
        <Stack align={['center', 'start']} >
          <Heading fontSize={'3xl'} >
            Register
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            To become one of our Instructor ✌️
          </Text>
          <form action="" method="POST" onSubmit={(e) => handleSubmit(e)} >
             {/* <label for="firstame">First Name</label> */}
              
               <input type="text" name="firstname" id="firstname" value={user["firstname"]} onChange={(e) => setUser({...user, firstname: e.target.value})} disabled={!status ? true : false} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block md:w-full p-4 my-2" placeholder="First Name" required/>

               {/* <label for="lastame">Last Name</label> */}
               <input type="text" name="lastname" id="lastname" value={user["lastname"]} onChange={(e) => setUser({...user, lastname: e.target.value})} disabled={!status ? true : false} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-4 my-2" placeholder="Last Name" required/>

               {/* <label for="email">Email</label> */}
               <input type="email" name="email" id="email" value={user["email"]} onChange={(e) => setUser({...user, email: e.target.value})} disabled={!status ? true : false} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-4 my-2" placeholder="name@company.com" required/>

               {/* <select name="instructor" id="instructor" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-4 my-2" required>
                <option  value='role' style={{color:'#BF8B6D'}}>Select role</option>
                <option  value={user["instructor"]} onChange={(e) => setUser({...user, instructor: e.target.value})}>Instructor</option>
              </select> */}

               {/* <label id="pass">Password</label> */}
      
               <input  type={type.input} name="password" id="password" value={user["password"]} onChange={(e) => setUser({...user, password: e.target.value})} disabled={!status ? true : false} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-4 my-2" placeholder="xxxxxxx" required/>
               <i className={`show-btn ${type.visible ? "fas fa-eye" : "fas fa-eye-slash"}`} onClick={tooglePassword}
               style={{position:'absolute', right:'12%', top:'58%', cursor:'pointer'}}
               ></i>
      
               
 
              <Stack
                // w={4/5}
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                {/* <Link to="/forgot-password" style={{color:'#197DDA'}}>Forgot password?</Link> */}
              </Stack>
         
            
               <button className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3">Continue</button>
              
                <Text align={'center'}>
                  Already an Instructor?  <Link to="/instructor/login" style={{color:'#197DDA'}}>Login</Link>
                </Text>
           
                <Text  fontSize='md' color={'gray.600'} textAlign={'center'} >By continuing you agree to our <span style={{color:'#197DDA'}}>Terms and Conditions </span>
                and consent to its <span style={{color:'#197DDA'}}>Privacy Policy</span>
                </Text>
            
             </form>

      </Stack>
      </Box>
      </Box>        
    </Flex>
  );
}



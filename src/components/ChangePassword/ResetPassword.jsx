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
import Cookies from "js-cookie";
// import { NavLink } from "react-router-dom"

// import { useNavigate } from "react-router"
import axios from "axios"
import Swal from "sweetalert2"

import lms2_logo from '../../assets/lms2_logo.png';
import lms_logo from '../../assets/lms_logo.png';
// import HomeNavbar from './HomeNavbar';

const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [status, setStatus] = useState(true)
    const [user, setUser] = useState({
        email: "",
    })

  
  // const navigate = useNavigate()
  const psw_url = `http://localhost:5000/api/v1/user/reset-password/:token`

  const changePassword = (e) => {
    e.preventDefault()
    setStatus(false)
    if(password !== cpassword){
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Password does not match"
        })
    }

    axios.put(psw_url, {password: password}, {
        headers: {
            Authorization: `Bearer ${Cookies.get("TOKEN")}`
        }
    })
    axios.post(psw_url, {password: password}, {
      headers: {
          Authorization: `Bearer ${Cookies.get("TOKEN")}`
      }
  })
  console.log(user.token)
    .then((res) => {
        if(res.data.status === "error"){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data.message
            })
            setStatus(true)
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: "Password Changed Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                setStatus(true)
                setCpassword("")
                setPassword("")
            }, 1500)
        }
    }).catch(error => {
        console.log(error.message) 
        setStatus(true)
    })
}

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
//                 text: "Password reset successful",
//                 showConfirmButton: false,
//                 timer: 1500
//             });
//   console.log(user.token)
//               setTimeout(() => {
//                   navigate("/login");
//               }, 1500)
//         }
//     }).catch(error => {
//         console.log(error.message) 
//         setStatus(true)
//     })
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
          <Stack textAlign={['center', 'start']} mb='10'>
            <Heading fontSize={'3xl'} >Create New Password</Heading>
          </Stack>
          <form action="" method="put" onSubmit={(e) => changePassword(e)} >

               {/* <label for="email">Email</label> */}
               <input  type='text' name="password" id="password" value={user["password"]} onChange={(e) => setUser({...user, password: e.target.value})} disabled={!status ? true : false} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-4 my-2" placeholder="New password" required/>

               <input  type='text' name="cpassword" id="cpassword" value={user["cpassword"]} onChange={(e) => setUser({...user, cpassword: e.target.value})} disabled={!status ? true : false} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-4 my-2" placeholder="Confirm password" required/>


            
               <button className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-3">continue</button>
              
                {/* <Text align={'center'}>
                  <Link to="/login" style={{color:'#197DDA'}}>Back to login</Link>
                </Text> */}
            
             </form>
          </Box>
          
      </Box>
      </Flex>
    </>
  )
}

export default ResetPassword
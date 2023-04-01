import React from 'react'
import { 
  // Text,
  // Stack, 
  useColorModeValue,
  Box,
  // Button, 
  Flex,
} from '@chakra-ui/react'
// import { NavLink } from "react-router-dom"
import instructorhero from '../../assets/instructor-hero.png'

const Hero = ({href}) => {
  // const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <Flex
    h={['100%']}
    >
    <Box
    bg={useColorModeValue('#197DDA', '#197DDA')}
    w={['100%','50%']}
    display="flex" alignItems="center"
    >

      
        <div class="text-gray-600 body-font">
          <div class="container px-5 py-4 mx-auto">
            <div class="flex flex-col text-center w-full mb-4">
              <h1 class=" text-4xl font-bold mb-2 text-gray-100">Welcome, Adewale</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-100">Instructor Data at a glance</p>
            </div>
              <div class="flex flex-wrap -m-4 text-center p-6">
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg bg-white h-36">
                
                <h2 class="text-center title-font font-medium text-4xl text-gray-900">0</h2>
                <p class="text-gray-900 leading-relaxed">Students</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg bg-white h-36 ">
                
                <h2 class="text-center title-font font-medium text-4xl text-gray-900">0</h2>
                <p class="text-gray-900 leading-relaxed">Courses</p>
              </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg bg-white h-36 ">
                  
                  <h2 class="text-center title-font font-medium text-4xl text-gray-900">0</h2>
                  <p class="text-gray-900 leading-relaxed">Certificate Awarded</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="px-4 py-6 rounded-lg bg-white m h-36 b-8">
                
              <h2 class="text-center title-font font-medium text-4xl text-gray-900">0</h2>
              <p class="text-gray-900 leading-relaxed">Discussion Forum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    



      {/* <Stack 
      px={['4', '16']}
      color={'white'}
      >
        <Text as='b' fontSize={['4xl', '5xl']} my={0} py={0} spacing={1} style={{lineHeight:'1.2'}}>Learn Web3 the <br />right way</Text>
     
        <Text fontSize='xl'>Get ahead of your peers With curated web3 courses</Text>
        <Button as={'as'} size="md" color={'#197DDA'} w={'40%'} ><NavLink to="/register" style={{color:'#197DDA'}}>Get Started</NavLink></Button>
      </Stack> */}
    </Box>
    <Box 
     bgImage={instructorhero}
     bgPosition="center"
     bgRepeat="no-repeat"
     w={'50%'}
      h={'100vh'}
      display={['none','block']}
    />
    
    </Flex>

    
    </>

    
  )
}

export default Hero
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
  return (
    <>
    <Flex
    h={['100%']}
    >
    <Box
    bg={useColorModeValue('#197DDA', '#197DDA')}
    w={['100%','50%']}
    // display="flex" alignItems="center"
    >

          <div class="px-8 my-10 w-full mx-auto ">
            <div class="px-6 py-4 bg-white h-28 border-solid border-4 border-yellow-400">
            {/* <div class='flex justify-between'> */}
              {/* <div> */}
              <h2 class="font-medium text-2xl text-gray-900">Complete Verification (KYC)</h2>
              <p class="text-gray-900 text-sm">Kindly complete your KYC verification to access all features as an instructor</p>
              {/* </div> */}
            {/* <button class=" text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none rounded">verify</button> */}
            {/* </div> */}
            
            </div>
          </div>
        <div class="text-gray-600 body-font">
          <div class="container px-5 py-4 mx-auto">
            <div class="flex flex-col text-center w-full mb-4">
              <h1 class="sm:text-2xl text-5xl font-bold mb-2 text-gray-100">Welcome, John Doe</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl text-gray-100">Instructor Data at a glance</p>
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
      {/* <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4 text-center p-8">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="px-4 py-6 rounded-lg bg-white mt-8">
          
          <h2 class="text-center title-font font-medium text-4xl text-gray-900">0</h2>
          <p class="text-gray-900 leading-relaxed">Students</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="px-4 py-6 rounded-lg bg-white">
          
          <h2 class="text-center title-font font-medium text-4xl text-gray-900">0</h2>
          <p class="text-gray-900 leading-relaxed">Courses</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="px-4 py-6 rounded-lg bg-white">
          
          <h2 class="text-center title-font font-medium text-4xl text-gray-900">0</h2>
          <p class="text-gray-900 leading-relaxed">Certificate Awarded</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="px-4 py-6 rounded-lg bg-white mb-8">
          
          <h2 class="text-center title-font font-medium text-4xl text-gray-900">0</h2>
          <p class="text-gray-900 leading-relaxed">Discussion Forum</p>
        </div>
      </div>
    </div> */}



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
      h={'100%'}
      display={['none','block']}
    />
    
    </Flex>

    
    </>

    
  )
}

export default Hero
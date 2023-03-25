import React from 'react'
import { Stack, Text, Button, Box, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react'


const Feature = () => {
  return (
    <Box
    bg={useColorModeValue('#197DDA', '#197DDA')}
    h={'80vh'}
    w={'100%'}
    py={10}
    >
    <Stack 
      px={['4', '16']}
      color={'#ffffff'}
      >
        <Text as='b' fontSize={['3xl', '4xl']} >Featured</Text>
        <Text as='b' fontSize={['lg', 'xl']} >Explore Inspiring Courses</Text>

        <Wrap spacing={4}
        _hover={{
          color: '#197DDA',
        }}
        >
          <WrapItem>
            <Button variant='outline'>ALL</Button>
          </WrapItem>
          <WrapItem>
            <Button variant='outline'>DAPP</Button>
          </WrapItem>
          <WrapItem>
            <Button variant='outline'>BLOCKCHAIN</Button>
          </WrapItem>
          <WrapItem>
            <Button variant='outline'>NFT</Button>
          </WrapItem>
          <WrapItem>
            <Button variant='outline'>CRYPTOCURRENCY</Button>
          </WrapItem>
        </Wrap>
      </Stack>

      
      
    </Box>
  )
}

export default Feature
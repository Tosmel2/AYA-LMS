import React from 'react'
import { 
  Text,
  Stack, 
  useColorModeValue,
  Box,
  Button, 
  Flex,
  List,
  ListItem,
  ListIcon,
  // OrderedList,
  // UnorderedList 
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
import { CheckCircleIcon } from '@chakra-ui/icons'
import herobg from '../../assets/herobg.png'

const Hero = ({href}) => {
  return (
    <>
    <Flex
    h={'100vh'}
    >
    <Box
    bg={useColorModeValue('#197DDA', '#197DDA')}
    w={['100%','50%']}
    h={'100%'}
    display="flex" alignItems="center"
    >
      <Stack 
      px={['4', '16']}
      color={'white'}
      >
        <Text as='b' fontSize={['4xl', '5xl']} my={0} py={0} spacing={1} style={{lineHeight:'1.2'}}>Learn Web3 the <br />right way</Text>
        {/* <Text as='b' fontSize={['4xl', '5xl']} mt={0}>right way</Text> */}
        <Text fontSize='xl'>Get ahead of your peers With curated web3 courses</Text>
        <Button as={'as'} size="md" color={'#197DDA'} w={'40%'} ><NavLink to="/register" style={{color:'#197DDA'}}>Get Started</NavLink></Button>
      </Stack>
    </Box>
    <Box 
     bgImage={herobg}
     bgPosition="center"
     bgRepeat="no-repeat"
     w={'50%'}
      h={'100%'}
      display={['none','block']}
    />
    
    </Flex>

    <Flex
    minH={['100%','40vh']}
    flexWrap="wrap"
    py={4}
    >
    <Box
    bg={useColorModeValue('#ffffff', '#ffffff')}
    w={['100%','50%']}
    display="flex" alignItems="center"
    >
      <Stack 
      px={['4', '16']}
      color={'#197DDA'}
      >
        <Text as='b' fontSize={['3xl', '4xl']} my={0} py={0} spacing={1}>Join millions of learners in web3 spaces</Text>
      </Stack>
    </Box>

    <List
     w={['100%','50%']}
     display="flex" 
     p={4}
    //  alignItems="center"
     flexDirection="column"
     justifyContent="center"
      spacing={3}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='#197DDA' />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='#197DDA' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='#197DDA' />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='#197DDA' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
    
    </Flex>
    </>

    
  )
}

export default Hero
import React from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react'

const CourseCards = (props) => {
  return (
    <Flex
    p={2}
    w={'50%'}
    h={'30vh'}
    // flexDirection={['column', 'row']}
    // display="flex" alignItems="center"

    >
      <Box
      w={'40%'}
      h={'100%'}
      >
        <Image src={props.img} alt="thumbnail" objectFit="contain" w={'100%'} h={'100%'}/>
      </Box>
      
      <Box bg={'#ffffff'} p={2} w={'60%'} h={'100%'}>
        <Text as='b' fontSize={['lg', 'xl']}>{props.title}</Text>
        <Text fontSize={['sm', 'md']}>{props.description}</Text>
      </Box>
    </Flex>
  )
}

export default CourseCards
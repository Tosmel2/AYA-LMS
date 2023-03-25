// import React from 'react'
// import CourseCards from '../CourseCards'
// import herobg from '../../assets/herobg.png';
// import { Box } from '@chakra-ui/react';
// import { Flex, Text, Image } from '@chakra-ui/react' 

// const JustAdded = (props) => {
//   return (
//     <>
//        <Flex
//     minH={'85vh'}
//     >
//       <Box
//         w={'40%'}
//         h={'100%'}
//         >
//         <Image src={herobg} alt="thumbnail" objectFit="contain" w={'100%'} h={'100%'}/>
//       </Box>
      
//       <Box bg={'#ffffff'} p={2} w={'60%'} h={'100%'}>
//         <Text as='b' fontSize={['lg', 'xl']}>Build a Dapp</Text>
//         <Text fontSize={['sm', 'md']}>Learn how to build a dapp with solidity and react</Text>
//       </Box>


//     <Box>
//     <CourseCards
//       img={herobg}
//       title='Build a Dapp'
//       description='Learn how to build a dapp with solidity and react'
//       />

//       <CourseCards
//       img={herobg}
//       title='Build a Dapp'
//       description='Learn how to build a dapp with solidity and react'
//       />

//       <CourseCards
//       img={herobg}
//       title='Build a Dapp'
//       description='Learn how to build a dapp with solidity and react'
//       />
//     </Box>

//     </Flex>
      
//     </>
//   )
// }

// export default JustAdded


// import React, { useState } from 'react'
// // import CourseCards from '../CourseCards'
// import herobg from '../../assets/herobg.png';
// import { Box } from '@chakra-ui/react';
// import { Flex, Text, Image } from '@chakra-ui/react'

// const courseData = {
//   courses: [
//     {
//       img: herobg,
//       title: 'Build a Dapp',
//       description: 'Learn how to build a dapp with solidity and react',
//     },
//     {
//       img: herobg,
//       title: 'Build a Dapp',
//       description: 'Learn how to build a dapp with solidity and react',
//     },
//     {
//       img: herobg,
//       title: 'Build a Dapp',
//       description: 'Learn how to build a dapp with solidity and react',
//     },
//     {
//       img: herobg,
//       title: 'Build a Dapp',
//       description: 'Learn how to build a dapp with solidity and react',
//     },
//   ],
// };

// const JustAdded = (props) => {
// const [activeIndex, setActiveIndex] = useState(0);

// const handleCourseCardClick = (index) => {
// setActiveIndex(index);
// }

// return (
// <>
// <Flex minH={'85vh'}>
// <Box w={'40%'} h={'100%'}>
// <Image src={herobg} alt="thumbnail" objectFit="contain" w={'100%'} h={'100%'} />
// </Box>

//     <Box bg={'#ffffff'} p={2} w={'60%'} h={'100%'}>
//       <Text as='b' fontSize={['lg', 'xl']}>
//         {courseData.courses[activeIndex].title}
//       </Text>
//       <Text fontSize={['sm', 'md']}>
//         {courseData.courses[activeIndex].description}
//       </Text>
//     </Box>

//     <Box>
//       {courseData.courses.map((course, index) => (
//         <CourseCards
//           key={index}
//           {...course}
//           // img={course.img}
//           // title={course.title}
//           // description={course.description}
//           onClick={() => handleCourseCardClick(index)}
//           isActive={index === activeIndex}
//         />
//       ))}
//     </Box>

//   </Flex>
// </>
// )
// }

// export default JustAdded


// const CourseCards = (props) => {
//   return (
//     <Flex
//     p={2}
//     w={'50%'}
//     h={'30vh'}
//     // flexDirection={['column', 'row']}
//     // display="flex" alignItems="center"

//     >
//       <Box
//       w={'40%'}
//       h={'100%'}
//       >
//         <Image src={props.img} alt="thumbnail" objectFit="contain" w={'100%'} h={'100%'}/>
//       </Box>
      
//       <Box bg={'#ffffff'} p={2} w={'60%'} h={'100%'}>
//         <Text as='b' fontSize={['lg', 'xl']}>{props.title}</Text>
//         <Text fontSize={['sm', 'md']}>{props.description}</Text>
//       </Box>
//     </Flex>
//   )
// }

import React, { useState } from 'react';
import CourseCards from '../CourseCards';
import herobg from '../../assets/herobg.png';
import { Box } from '@chakra-ui/react';
import { Flex, Text,  Button } from '@chakra-ui/react';

const courseData = {
  courses: [
    {
      img: herobg,
      title: 'Getting Started with Web3 Development',
      description: 'Learn how to build a dapp with solidity and react',
    },
    {
      img: herobg,
      title: 'Getting Started with Web3 Development',
      description: 'Learn how to build a dapp with solidity and react',
    },
    {
      img: herobg,
      title: 'Getting Started with Web3 Development',
      description: 'Learn how to build a dapp with solidity and react',
    },
    {
      img: herobg,
      title: 'Getting Started with Web3 Development',
      description: 'Learn how to build a dapp with solidity and react',
    },
    {
      img: herobg,
      title: 'Build a Dapp',
      description: 'Learn how to build a dapp with solidity and react',
    },
  ],
};

const JustAdded = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3; // change this to the number of courses you want to display per page

  const handleCourseCardClick = (index) => {
    setActiveIndex(index);
  };

  // calculate the index of the last course on the current page
  const lastIndex = currentPage * coursesPerPage;

  // calculate the index of the first course on the current page
  const firstIndex = lastIndex-coursesPerPage;

  // slice the array of courses to display only the courses for the current page
  const coursesToShow = courseData.courses.slice(firstIndex, lastIndex);
  
  // handle pagination
  const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
  };
  
  return (
  <Box>
  <Text fontSize="3xl" fontWeight="bold" mb="4">
  Just Added
  </Text>
  <Flex flexWrap="wrap" justifyContent="center" alignItems={'flex-end'} flexDirection={'column'}>
  {coursesToShow.map((course, index) => (
  <CourseCards
  key={index}
  img={course.img}
  title={course.title}
  description={course.description}
  active={index === activeIndex}
  onClick={() => handleCourseCardClick(index)}
  />
  ))}
  </Flex>
  <Box mt="4">
  <Button  variant='outline'
       coursesPerPage={coursesPerPage}
       totalCourses={courseData.courses.length}
       paginate={paginate}
     >Test</Button>
  </Box>
  </Box>
  );
  };
  
  export default JustAdded;
  
  
  
  
  
  
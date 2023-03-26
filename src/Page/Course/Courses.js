import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import Navbar from '../../components/Homepage/Navbar'
import Footer from '../../molecules/Footer'

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Divider,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Center,
  HStack,
  IconButton,
  Badge,
} from '@chakra-ui/react'

const CoursePostingForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState(null)
  const [promotionalImage, setPromotionalImage] = useState(null)
  const [date, setDate] = useState('')
  const [category1, setCategory1] = useState('')
  const [category2, setCategory2] = useState('')
  const [category3, setCategory3] = useState('')
  const [language, setLanguage] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [level, setLevel] = useState('beginner')

  const handleSubmit = (event) => {
    event.preventDefault()
    // handle form submission here
  }

  function handleImageUpload(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImage(reader.result)
      }
    }
  }

  function handlePromotionalImageUpload(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setPromotionalImage(reader.result)
      }
    }
  }

  return (
    <Box>
      <Navbar />
      <Box flex="1" bg="blue.100" p="4" alignItems="center">
        <Box>
          <Flex></Flex>
        </Box>
      </Box>
      <Center>
        <Heading as="h1" size="xl" mb="6">
          Title of Course
        </Heading>
      </Center>
      <Divider borderWidth="1px" marginBottom="19px" />
      <Flex
        width={{ base: '100%', md: '90%' }}
        height={{ base: '50%', md: '200%' }}
        maxWidth="1200px"
        margin="auto"
        sx={{
          '@media (max-width: 768px)': {
            height: '75vh',
          },
          '@media (max-width: 480px)': {
            width: '90%',
          },
        }}
      >
        <Box w="30%" mt="100px" p="10px" mr="80px">
          <RadioGroup defaultValue="Intended Learners">
            <Stack spacing={3}>
              <Radio value="Intended Learners" color={'#197DDA'}>
                Intended Learners
              </Radio>
              <Radio value="Course Content" color={'#197DDA'}>
                Course Content
              </Radio>
              <Radio value="Course Landing Page" color={'#197DDA'}>
                Course Landing Page
              </Radio>
              <Radio value="Pricing" color={'#197DDA'}>
                Pricing
              </Radio>

              <Button
                colorScheme="blue"
                size="md"
                sx={{ borderRadius: '8px', fontWeight: 'bold' }}
              >
                Publish Course
              </Button>
            </Stack>
          </RadioGroup>
        </Box>

        <Divider
          h="300px"
          mt="50px"
          borderWidth="1px"
          color={'#197DDA'}
          orientation="vertical"
        />
        <Box p="6">
          <p>
            Your course landing page is the page first seen by a user or an
            intending learner when the click your course. Make sure it is
            compelling enough to drive learners to enroll in your course.
          </p>
          <form onSubmit={handleSubmit}>
            <FormControl id="title" mb="4">
              <FormLabel>Course Title</FormLabel>
              <Input
                type="text"
                placeholder="Introduction to web Design"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </FormControl>

            <FormControl id="author" mb="4">
              <FormLabel>Course Description</FormLabel>
              <Input
                type="text"
                placeholder="Enter the course author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </FormControl>
            <FormControl></FormControl>
            <FormControl id="basicInfo" mb="4">
              <Flex justifyContent="space-between" width="100%">
                <Select
                  placeholder="Select level"
                  value={category1}
                  onChange={(event) => setCategory1(event.target.value)}
                  marginRight="2"
                >
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="marketing">Marketing</option>
                </Select>
                <Select
                  placeholder="Select Category"
                  value={category2}
                  onChange={(event) => setCategory2(event.target.value)}
                  marginRight="2"
                >
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="marketing">Marketing</option>
                </Select>
                <Select
                  placeholder="Select Sub-category"
                  value={category3}
                  onChange={(event) => setCategory3(event.target.value)}
                >
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="marketing">Marketing</option>
                </Select>
              </Flex>
            </FormControl>

            <FormControl id="language" mb="4">
              <FormLabel>Language</FormLabel>
              <Select
                placeholder="Select Language"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
              >
                <option value="programming">Programming</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
                <option value="marketing">Marketing</option>
              </Select>
            </FormControl>

            <FormControl>
              <label htmlFor="image-input">Course Image</label>
              <Input
                type="file"
                id="file-input"
                accept="image/*"
                display="none"
                onChange={handleImageUpload}
              />
              <FormControl>
                <label htmlFor="file-input">
                  <Button
                    as="span"
                    width="100%"
                    colorScheme="blue"
                    variant="outline"
                    cursor="pointer"
                    _hover={{ bg: 'blue.500', color: 'white' }}
                  >
                    Choose Image
                  </Button>
                </label>
              </FormControl>
            </FormControl>

            <FormControl>
              <label htmlFor="image-input">Course Promotional Video</label>
              <Input
                type="file"
                accept="image/*"
                id="file-input"
                display="none"
                onChange={handleImageUpload}
              />
              <label htmlFor="file-input">
                <Button
                  as="span"
                  width="100%"
                  colorScheme="blue"
                  variant="outline"
                  cursor="pointer"
                  _hover={{ bg: 'blue.500', color: 'white' }}
                >
                  Course Promotional Video
                </Button>
              </label>
            </FormControl>
            {/* <FormControl>
              <label htmlFor="image-input">Course Promotional Video</label>
              <Input
                type="file"
                accept="image/*"
                onChange={handlePromotionalImageUpload}
              />
            </FormControl> */}

            <FormControl mt="20px">
              <label htmlFor="image-input">Instructor Profile</label>
              <div>
                <Link
                  href="#"
                  isExternal
                  color="blue.500"
                  fontWeight="bold"
                  fontSize="md"
                >
                  + Edit your profile
                </Link>
              </div>
            </FormControl>

            <Center mt="100px" mb="50px" gap="20px">
              <Button
                w="15%"
                colorScheme="blue"
                _hover={{ bg: 'white', color: 'blue' }}
              >
                Previous
              </Button>
              <Button
                w="15%"
                colorScheme="blue"
                _hover={{ bg: 'white', color: 'blue' }}
              >
                Next
              </Button>
            </Center>
          </form>
        </Box>
      </Flex>
      <Footer />
    </Box>
  )
}

export default CoursePostingForm

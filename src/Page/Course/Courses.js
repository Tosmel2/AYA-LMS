import React, { useState } from "react";

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
  Textarea,
} from "@chakra-ui/react";
// import { NavLink } from "react-router-dom"
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router"

const CoursePostingForm = () => {
  const user = JSON.parse(localStorage.getItem('user')) 
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState(true)
  // const [image, setImage] = useState(null);
  const [courseThumbnailImage, setcourseThumbnailImage] = useState(null);
  const [date, setDate] = useState("");
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [level, setLevel] = useState("beginner");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // create an object with the data of the course
  //   const courseData = {
  //     title: title,
  //     author: author,
  //     image: image,
  //     promotionalImage: promotionalImage,
  //     date: date,
  //     category1: category1,
  //     category2: category2,
  //     category3: category3,
  //     language: language,
  //     description: description,
  //     price: price,
  //     level: level,
  //   };
  //   // make a POST request to the API to add the course
  //   axios
  //     .post("/api/add-course", courseData)
  //     .then((response) => {
  //       console.log(response.data);
  //       // handle the successful response here
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // handle the error here
  //     });
  // };

  const navigate = useNavigate()

  const url = `http://localhost:5000/api/v1/courses`
  // const url = `https://aya-project-prod.vercel.app/api/v1/users/register`

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(false)

    const courseData = {
      title: title,
      instructor: `${user.firstname} ${user.lastname}`,
      courseThumbnailImage: courseThumbnailImage,
      category1: category1,
      category2: category2,
      category3: category3,
      language: language,
      description: description,
      price: price,
      level: level,
    };

    axios.post(url, courseData)
    .then((res) => {
        if(res.data.status === "error"){
            setStatus(true)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data.message
            });
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: "New Courses uploaded Successful",
                showConfirmButton: false,
                timer: 1500
            });
              setTimeout(() => {
                  navigate("/instructor/dashboard");
              }, 1500)
        }
    }).catch(error => {
        console.log(error.message) 
        setStatus(true)
    })
}


  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setcourseThumbnailImage(reader.result);
      };
    }
  }

  // function handlePromotionalImageUpload(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       setPromotionalImage(reader.result);
  //     };
  //   }
  // }

  return (
    <Box mt="90px">
      <Box flex='1' bg='blue.100' p='4' alignItems='center'>
        <Box>
          <Flex></Flex>
        </Box>
      </Box>
      <Center>
        <Heading as='h1' size='xl' mb='6'>
          Title of Course
        </Heading>
      </Center>
      <Divider borderWidth='1px' marginBottom='19px' />
      <Flex
        width={{ base: "100%", md: "90%" }}
        height={{ base: "50%", md: "200%" }}
        maxWidth='1200px'
        margin='auto'
        sx={{
          "@media (max-width: 768px)": {
            height: "75vh",
          },
          "@media (max-width: 480px)": {
            width: "90%",
          },
        }}
      >
        <Box w='30%' mt='100px' p='10px' mr='80px'>
          <RadioGroup defaultValue='Intended Learners'>
            <Stack spacing={3}>
              <Radio value='Intended Learners' color={"#197DDA"}>
                Intended Learners
              </Radio>
              <Radio value='Course Content' color={"#197DDA"}>
                Course Content
              </Radio>
              <Radio value='Course Landing Page' color={"#197DDA"}>
                Course Landing Page
              </Radio>
              <Radio value='Pricing' color={"#197DDA"}>
                Pricing
              </Radio>

              <Button
                type='submit'
                as={'as'}
                colorScheme='blue'
                size='md'
                sx={{ borderRadius: "8px", fontWeight: "bold" }}
                onSubmit={(e) => handleSubmit(e)}
              >
                Publish Course
              </Button>
            </Stack>
          </RadioGroup>
        </Box>

        <Divider
          h='300px'
          mt='50px'
          borderWidth='1px'
          color={"#197DDA"}
          orientation='vertical'
        />
        <Box p='6'>
          <h2 className="font-bold text-2xl">Course Landing Page</h2>
          <p>
            Your course landing page is the page first seen by a user or an
            intending learner when the click your course. Make sure it is
            compelling enough to drive learners to enroll in your course.
          </p>
          <form onSubmit={handleSubmit}>
            <FormControl id='title' mb='4' mt='3'>
              <FormLabel>Course Title</FormLabel>
              <Input
                type='text'
                placeholder='e.g Introduction to web Design'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </FormControl>

            <FormControl id='author' mb='4'>
              <FormLabel>Course Description</FormLabel>
              <Textarea
                type='text'
                placeholder='e.g Introduction to web Design'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
               />
            </FormControl>
            <FormLabel>Basic Info</FormLabel>
            <FormControl id='basicInfo' mb='4'>
              <Flex justifyContent='space-between' width='100%'>
                <Select
                  placeholder='Select level'
                  value={category1}
                  onChange={(event) => setCategory1(event.target.value)}
                  marginRight='2'
                >
                  <option value='beginner'>Beginner</option>
                  <option value='intermediate'>Intermediate</option>
                  <option value='advance'>Advance</option>
                 
                </Select>
                <Select
                  placeholder='Select Category'
                  value={category2}
                  onChange={(event) => setCategory2(event.target.value)}
                  marginRight='2'
                >
                  <option value='programming'>Programming</option>
                  <option value='design'>Design</option>
                  <option value='business'>Business</option>
                  <option value='marketing'>Marketing</option>
                </Select>
                <Select
                  placeholder='Select Sub-category'
                  value={category3}
                  onChange={(event) => setCategory3(event.target.value)}
                >
                  <option value='programming'>Programming</option>
                  <option value='design'>Design</option>
                  <option value='business'>Business</option>
                  <option value='marketing'>Marketing</option>
                </Select>
              </Flex>
            </FormControl>

            <FormControl id='language' mb='4'>
              <FormLabel>Language</FormLabel>
              <Select
                placeholder='Select Language'
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
              >
                <option value='programming'>Programming</option>
                <option value='design'>Design</option>
                <option value='business'>Business</option>
                <option value='marketing'>Marketing</option>
              </Select>
            </FormControl>

            <FormControl>
              <label htmlFor='image-input'>Course Image</label>
              <Input
                type='file'
                id='file-input'
                accept='image/*'
                style={{ display: 'none' }}
                // value={courseThumbnailImage}
                onChange={handleImageUpload}
              />
              <FormControl>
                <label htmlFor='file-input'>
                  <Button
                    as='span'
                    width='100%'
                    colorScheme='blue'
                    variant='outline'
                    cursor='pointer'
                    _hover={{ bg: "blue.500", color: "white" }}
                  >
                    Choose Image
                  </Button>
                </label>
              </FormControl>
            </FormControl>

            <FormControl>
              <label htmlFor='image-input'>Course Promotional Video</label>
              <Input
                type='file'
                accept='image/*'
                id='file-input'
                display='none'
                onChange={handleImageUpload}
              />
              <label htmlFor='file-input'>
                <Button
                  as='span'
                  width='100%'
                  colorScheme='blue'
                  variant='outline'
                  cursor='pointer'
                  _hover={{ bg: "blue.500", color: "white" }}
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

            <FormControl mt='20px'>
              <label htmlFor='image-input'>Instructor Profile</label>
              <div>
                <Link
                  href='#'
                  isExternal
                  color='blue.500'
                  fontWeight='bold'
                  fontSize='md'
                >
                  + Edit your profile
                </Link>
              </div>
            </FormControl>

            <Center mt='100px' mb='50px' gap='20px'>
              <Button
                w='15%'
                colorScheme='blue'
                _hover={{ bg: "white", color: "blue" }}
              >
                Previous
              </Button>
              <Button
              type='submit'
                w='15%'
                colorScheme='blue'
                _hover={{ bg: "white", color: "blue" }}
              >
                Next
              </Button>
            </Center>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default CoursePostingForm;

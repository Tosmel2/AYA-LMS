import { useState } from 'react'
import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  Divider,
  Avatar,
  Textarea,
} from '@chakra-ui/react'

function DiscussionPost() {
  const [post, setPost] = useState({
    id: 1,
    author: 'John Doe',
    date: '2022-03-23T08:00:00Z',
    title: 'This is the discussion post title',
    content: 'This is the discussion post content.',
  })

  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Jane Doe',
      date: '2022-03-23T09:00:00Z',
      content: 'This is the first comment.',
    },
    {
      id: 2,
      author: 'Bob Smith',
      date: '2022-03-23T10:00:00Z',
      content: 'This is the second comment.',
    },
  ])

  const [newComment, setNewComment] = useState('')

  function handleNewCommentChange(event) {
    setNewComment(event.target.value)
  }

  function handleNewCommentSubmit() {
    const newId = comments.length + 1
    const newAuthor = 'Anonymous'
    const newDate = new Date().toISOString()
    const newContent = newComment.trim()

    if (newContent) {
      const newComment = { id: newId, author: newAuthor, date: newDate, content: newContent }
      setComments([...comments, newComment])
      setNewComment('')
    }
  }

  return (
    <Box p={4}>
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
       

        <Divider
          h="300px"
          mt="50px"
          borderWidth="1px"
          color={'#197DDA'}
          orientation="vertical"
        />
        
      </Flex>
      {/* Post */}
      <Box mb={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={2}>{post.title}</Text>
        <Flex align="center" mb={2}>
          <Avatar name={post.author} mr={2} />
          <Text fontWeight="bold">{post.author}</Text>
          <Text mx={2}>•</Text>
          <Text color="gray.500">{new Date(post.date).toLocaleString()}</Text>
        </Flex>
        <Text>{post.content}</Text>
      </Box>

      <Divider my={4} />

      {/* Comments */}
      {comments.map(comment => (
        <Box key={comment.id} mb={4}>
          <Flex align="center" mb={2}>
            <Avatar name={comment.author} mr={2} />
            <Text fontWeight="bold">{comment.author}</Text>
            <Text mx={2}>•</Text>
            <Text color="gray.500">{new Date(comment.date).toLocaleString()}</Text>
          </Flex>
          <Text>{comment.content}</Text>
        </Box>
      ))}

      <Divider my={4} />

      {/* New comment form */}
      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Add a comment</Text>
        <Textarea
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder="Type your comment here"
          resize="none"
          mb={2}
        />
        <Button onClick={handleNewCommentSubmit} colorScheme="blue">
          Post Comment
        </Button>
      </Box>
    </Box>
  )
}

export default DiscussionPost



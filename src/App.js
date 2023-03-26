import React from 'react';
import './App.css';
import { ChakraProvider, Switch, theme } from '@chakra-ui/react';
import Homepage from './components/Homepage';
import {  BrowserRouter, BrowserRouter as Router,
   Route,  Routes, useRoutes } from 'react-router-dom';
import CoursePostingForm from './Page/Course/Courses';
import AdminLogin from './Page/admin/adminLog';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< Homepage/>} />
        <Route  path="/course" element={<CoursePostingForm />} />
        <Route path='/adminLog' element={<AdminLogin/>}/>
      </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  );
}

export default App;

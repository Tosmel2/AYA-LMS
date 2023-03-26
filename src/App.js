import React from "react";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePostingForm from "./Page/Course/Courses";
import Profile from "./components/Profile/Profile";
import AdminLogin from './Page/admin/adminLog';
import Navbar from "./molecules/Navbar";
import Footer from "./molecules/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/course' element={<CoursePostingForm />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route path='/adminLog' element={<AdminLogin/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePostingForm from "./Page/Course/Courses";
import Profile from "./components/Profile/Profile";
import AdminLogin from "./Page/admin/adminLog";
import Register from "./Page/Register/register";
import Wrapper from "./molecules/container/Wrapper";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Wrapper>
                <Homepage />
              </Wrapper>
            }
          />
          <Route
            exact
            path='/course'
            element={
              <Wrapper>
                <CoursePostingForm />
              </Wrapper>
            }
          />
          <Route exact path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/adminLog' element={<AdminLogin />} />
          <Route path='*' element={<h2>404, page not found</h2>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

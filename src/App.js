import React from "react";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePostingForm from "./Page/Course/Courses";
// import SearchResult from "./Page/Course/SearchResult";
import Profile from "./components/Profile/Profile";
import AdminLogin from "./Page/admin/adminLog";
// import Register from "./Page/Register/register";
import Login from "./components/Login";
import Register from "./components/Register";
import Wrapper from "./molecules/container/Wrapper";
import LandingPage from "./components/LandingPage";
import InstructorRegister from "./components/Instructor/InstructorRegister";
import InstructorLogin from "./components/Instructor/InstructorLogin";
import InstructorDashboard from "./components/Instructor/InstructorDashboard";
import MyCourses from "./components/MyCourses/MyCourses";
import ViewCourse from "./components/MyCourses/ViewCourse";
import ResetPassword from "./components/ChangePassword/ResetPassword";
import ForgetPassword from "./components/ChangePassword/ForgotPassword";
// import MetamaskReg from "./components/MetamaskReg";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={
              // <Wrapper>
                <LandingPage />
              // </Wrapper>
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
          {/* <Route path='/' element={<LandingPage />} /> */}
          <Route exact path='/profile' element={<Profile />} />
          {/* <Route exact path='/search-results' element={<SearchResult />} /> */}
          <Route exact path='/instructor/register' element={<InstructorRegister />} />
          <Route exact path='/instructor/login' element={<InstructorLogin />} />
          <Route exact path='/instructor/dashboard' element={<InstructorDashboard />} />
          <Route exact path='/forgot-password' element={<ForgetPassword />} />
          <Route exact path='/reset-password' element={<ResetPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/courses/mycourse' element={<MyCourses />} />
          <Route path='/viewcourse' element={<ViewCourse />} />
          {/* <Route path='/meta_auth/login' element={<MetamaskReg />} /> */}
          <Route path='/adminLog' element={<AdminLogin />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/home' element={<Homepage />} /> */}
          <Route path='*' element={<h2 style={{fontSize:'2rem', textAlign:'center'}}>404, page not found</h2>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

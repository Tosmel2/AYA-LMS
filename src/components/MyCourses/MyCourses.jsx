import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from "../Homepage/Navbar";
import Footer from "../../molecules/Footer";
import myCoin from '../../assets/coin.png'
import web3 from '../../assets/small.png'
import eth from '../../assets/eth.png'



const MyCourses = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    if (selectedTab === 'all') {
      setCourses([
        { title: "Getting Started with Web3 Development", instructor: "Adejumo Fisayo", courseImage: myCoin},
        { title: "Web3 for Beginners", instructor: "John Smith", courseImage: web3 },
        { title: "Advanced Web3 Techniques", instructor: "Jane Doe", courseImage: eth},
      ]);
    } else if (selectedTab === 'new') {
      setCourses([
        { title: "Advanced Web3 Techniques", instructor: "Jane Doe", courseImage: eth},
      ]);
    } else if (selectedTab === 'progress') {
      setCourses([
        { title: "Web3 for Beginners", instructor: "John Smith", courseImage: web3 }
      ]);
    } else if (selectedTab === 'completed') {
      setCourses([
        { title: "Getting Started with Web3 Development", instructor: "Adejumo Fisayo", courseImage: myCoin}
      ]);
    }
  }, [selectedTab]);

  
  
  return (
    <>
      <Navbar />
        <div class="w-full px-12 py-8 flex flex-wrap flex-col my-8" 
        style={{backgroundColor:'#197DDA'}}>
          <h1 className='text-3xl mt-16 text-white font-bold'>My Courses</h1>
          <div class="flex  flex-wrap mt-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('all');
            }}
            class={`py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font text-white font-bold inline-flex items-center leading-none ${
              selectedTab === 'all' ? 'border-b-2' : 'border-gray-200'
            } tracking-wider rounded-t`}
          >
            All Courses
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('new');
            }}
            class={`sm:px-4 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font text-white font-bold inline-flex items-center leading-none ${
              selectedTab === 'new' ? 'border-b-2' : 'border-gray-200'
            } tracking-wider`}
          >
            New
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('progress');
            }}
            class={`sm:px-4 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font text-white font-bold inline-flex items-center leading-none ${
              selectedTab === 'progress' ? 'border-b-2' : 'border-gray-200'
            } tracking-wider`}
          >
            In-Progress
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('completed');
            }}
            class={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font text-white font-bold inline-flex items-center leading-none ${
              selectedTab === 'completed' ? 'border-b-2' : 'border-gray-200'
            } tracking-wider`}
          >
            Completed
          </a>
          </div>
        </div>

        <div class=" container px-10 py-8 flex flex-wrap justify-between mb-8">
          {Courses.map((course, index) => (
            <div key={index} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <img 
              src={course.courseImage} 
              className="block object-cover object-center rounded w-full" 
              alt="course cards" />
                <div className='bg-slate-50 p-4'>
                  <h1 className='font-bold text-2xl sm:text-lg'>{course.title}</h1>
                  <p>{course.instructor}</p>
                </div>
            </div>
          ))}
        </div>
      <Footer />

    </>
  )
}

export default MyCourses
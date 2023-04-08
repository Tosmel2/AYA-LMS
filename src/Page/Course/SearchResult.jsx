import React, { useState } from 'react';
import Navbar from '../../molecules/Navbar';
import Footer from '../../molecules/Footer';
import img from '../../assets/crypto.png';
import '../../styles/searchResult.css';
import { Icon } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { SearchIcon } from "@chakra-ui/icons";

// const url = `http://localhost:5000/api/v1/courses/search`;

const url = `https://ayapod5-be.onrender.com/api/v1/courses/search`

const SearchResult = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState([]);

  const handleSearch = () => {
    const searchUrl = `${url}/search?q=${encodeURIComponent(searchQuery)}`;
    fetch(searchUrl)
      .then(response => response.json())
       .then(data => setCourses(data.results))
      .catch(error => console.log(error));
  };

  return (
    <>
      <Navbar />
      <div className="res-wrp">
        <div className="res-box">
          
          

          {/* Add search bar */}
          <div className="search-bar ml-6">
          <input
            type='text'
            placeholder='Find a course'
            className='border border-r-0 rounded-sm rounded-r-none p-2 text-gray-600 lg:max-w-[19rem] w-full lg:w-80 mx-0'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button className='bg-blue-500 w-fit h-fit p-[.57rem] rounded-l-none rounded-sm my-1'>
            <SearchIcon onClick={handleSearch}/>
          </button>
            {/* <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button> */}

            <h1 className="res-head">
            {courses.length > 0
              ? `${courses.length} results for "${searchQuery}"`
              : 'Search for courses'}
          </h1>
          </div>

          <div className="result">
            {courses.map(course => (
              <div className="result-card my-6" key={course.id}>
                <div className="res-open">
                  <img src={course.img || img} alt="course img" className="block object-cover object-center rounded w-full" />
                  <div className="res-text">
                    <h1>{course.title}</h1>
                    <p>Instructor: {course.instructor}</p>
                    <p className="text-md text-[#197DDA] text-xl">
                      <Icon as={AiFillStar} />
                      <Icon as={AiFillStar} />
                      <Icon as={AiFillStar} />
                      <Icon as={AiFillStar} />
                      <Icon as={AiOutlineStar} />
                    </p>
                    {/* <p>{course.description}</p> */}
                  </div>
                </div>
                <div className="res-price">
                  <p>0.062</p>
                  <p id="crncy">ETH</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <Footer />
    </>
  );
};

export default SearchResult;

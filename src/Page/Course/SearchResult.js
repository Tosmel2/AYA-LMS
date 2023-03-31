import React from 'react'
import Navbar from '../../molecules/Navbar'
import Footer from '../../molecules/Footer'
import img from '../../assets/crypto.png'
import '../../styles/searchResult.css'


const courses = [
  {
    id: 1,
    img: img,
    title: 'Getting Started with Web3 Development',
    instructor: 'Sebastein arbogast',
    rating: 4.6,
    price: 0.062,
    currency: 'ETH'
  },
  {
    id: 2,
    img: img,
    title: 'Advanced Web3 Development',
    instructor: 'John Doe',
    rating: 4.8,
    price: 0.1,
    currency: 'ETH'
  },
  {
    id: 3,
    img: img,
    title: 'Advanced Blockchain Technology',
    instructor: 'John Doe',
    rating: 5.2,
    price: 0.1,
    currency: 'ETH'
  }
]


const SearchResult =()=>{
    return(
        <>
        <Navbar/>
            <div className='res-wrp'>
                <div className='res-box'>
                    <h1 className='res-head'>3 results for "Web3 Foundations"</h1>
                    <div className='result'>
                                          
                    {courses.map(course => (
                    <div className='result-card' key={course.id}>
                      <div className='res-open'>
                        <img src={course.img} alt="" />
                        <div className='res-text'>
                          <h3>{course.title}</h3>
                          <p>{course.instructor}</p>
                          <p>{course.rating}</p>
                        </div>
                      </div>
                      <div className='res-price'>
                        <p>{course.price}</p>
                        <p id='crncy'>{course.currency}</p>
                      </div>
                    </div>
                  ))}

                        {/* <div className='result-card'>
                            <div className='res-open'>
                            <img src={img} alt="" />
                            <div className='res-text'>
                                <h3>Getting Started with Web3 Development</h3>
                                <p>Sebastein arbogast</p>
                                <p>4.6</p>
                            </div>
                            </div>
                            <div className='res-price'>
                                <p>0.062</p>
                                <p id='crncy'>ETH</p>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default SearchResult
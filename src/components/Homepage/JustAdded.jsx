import React, { useState } from 'react'
import '../../styles/justadded.css'
import myCoin from '../../assets/coin.png'
import web3 from '../../assets/small.png'


const JustAdded = () => {
  const web3Data = [
    { title: "Getting Started with Web3 Development", author: "Adejumo Fisayo", courseImage: myCoin, description: "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain" },
    { title: "Web3 for Beginners", author: "John Smith", courseImage: web3, description: "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain" },
    { title: "Advanced Web3 Techniques", author: "Jane Doe", courseImage: myCoin, description: "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain" },
    { title: "Mastering Solidity", author: "Bob Johnson", courseImage: web3, description: "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain" }
  ];

  const [activeData, setActiveData] = useState(web3Data[0]);

  const handleDataClick = (data) => {
    setActiveData(data);
  };

  return (
    <div className='justadded-container'>
      <div className='justadded-content'>
        <h1>Just Added</h1>
        <div className='justadded-flex'>
          <div className='justadded-left'>
              <img className='my-image' src={activeData.courseImage} alt="" />
              <h2  style={{fontSize:'1.5rem', color: '#252C32'}}>{activeData.title}</h2>
              <p>{activeData.description}</p>
          </div>

          <div className='justadded-right'>
            {web3Data.map((data, index) => (
              <div key={index} className="web3-courses" onClick={() => handleDataClick(data)}>
                <img src={data.courseImage} className="courses__img-box" alt="" />
                <div className='justadded-text'>
                  <h3>{data.title}</h3>
                  <p>{data.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JustAdded


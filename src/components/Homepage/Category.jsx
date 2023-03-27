import React from 'react'
import { 
  Wrap,
  WrapItem,
  Button,
  Flex, 
} from '@chakra-ui/react'
import '../../styles/Category.css'
import alchemy from '../../assets/alchemy.png'
import etherum1 from '../../assets/etherum1.png'
import binance from '../../assets/binance.png'
import blockchain from '../../assets/blockchain.png'
import nft1 from '../../assets/nft1.png'
import token from '../../assets/token.png'
import staking from '../../assets/staking.png'
import solana from '../../assets/solana.png'
import solidity from '../../assets/solidity.png'


const Category = () => {
  const web3Data = [
    { title: "Alchemy", courseItems: "10 COURSES", image: alchemy },
    { title: "Ethereum", courseItems: "12 COURSES", image: etherum1 },
    { title: "Binance", courseItems: "9 COURSES", image: binance },
    { title: "Blockchain", courseItems: "10 COURSES", image: blockchain },
    { title: "NFT", courseItems: "15 COURSES", image: nft1 },
    { title: "Tokens", courseItems: "8 COURSES", image: token },
    { title: "Staking", courseItems: "7 COURSES", image: staking },
    { title: "Solana", courseItems: "13 COURSES", image: solana },
    { title: "Solidity", courseItems: "10 COURSES", image: solidity }
  ];
  // const [courseItems, setcourseItems] = useState(0);
  return (
    <div className='category-container'>
      <div className="category-content">
        <Flex
          justifyContent='space-between'
          flexWrap={['wrap', 'nowrap']}
          mb={6}
        >
          <h1>Explore topics by category</h1>
           <Wrap >
            <WrapItem>
              <Button variant='outline' color= 'white'>View All Categories</Button>
            </WrapItem>    
          </Wrap>
        </Flex>

        <div className="courses-category">
        {web3Data.map((data, index) => (
          <div key={index} className="web3" >
            <img src={data.image} className="web3__img-box" alt="" />
            <div className='category-text'>
              <h2>{data.title}</h2>
              <p>{data.courseItems}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Category
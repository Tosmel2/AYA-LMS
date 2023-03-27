import React from 'react'
import '../../styles/feature.css'
import { 
  Wrap,
  WrapItem,
  Button,
  Stack,
  Text,
  Box
} from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import etherum from '../../assets/etherum.png'
import nft from '../../assets/nft.png'
import blockchain from '../../assets/blockchain.png'
import dapps from '../../assets/dapps.png'
import crypto from '../../assets/crypto.png'


SwiperCore.use([Navigation, Pagination, Autoplay])

const Feature = () => {

  const slides = [
    {
      id: 1,
      title: 'Ethereum',
      description: 'Emerging model for organizing and enabling cryptocurrency-based transactions, exchanges and financial services',
      image: etherum,
    },
    {
      id: 2,
      title: 'Crypto',
      description: 'Emerging model for organizing and enabling cryptocurrency-based transactions, exchanges and financial services',
      image: crypto,
    },
    {
      id: 3,
      title: 'NFT',
      description: 'Emerging model for organizing and enabling cryptocurrency-based transactions, exchanges and financial services',
      image: nft,
    },
    {
      id: 4,
      title: 'Blockchain',
      description: 'Emerging model for organizing and enabling cryptocurrency-based transactions, exchanges and financial services',
      image: blockchain,
    },
    {
      id: 5,
      title: 'DApps',
      description: 'Emerging model for organizing and enabling cryptocurrency-based transactions, exchanges and financial services',
      image: dapps,
    },
    {
      id: 6,
      title: 'Crypto',
      description: 'Emerging model for organizing and enabling cryptocurrency-based transactions, exchanges and financial services',
      image: crypto,
    },
    {
      id: 7,
      title: 'Ethereum',
      description: 'Emerging model for organizing and enabling cryptocurrency-based transactions, exchanges and financial services',
      image: etherum,
    },
    {
      id: 8,
      title: 'Blockchain',
      description: 'Emerging model for organizing and enabling cryptocurrency-based transactions, exchanges and financial services',
      image: blockchain,
    },
  ]

  return (
    <div className="feature">
      <div className="mini-feature">
        <Stack 
          direction='column'
          pt={8}
          height={'30%'}
        >
          <Text as='b' fontSize={['3xl', '4xl']} my={1} spacing={1} color='white'>Featured</Text>
          <Text fontSize={['lg', 'xl']} my={2}  color='white'>Explore inspiring online courses</Text>

          <Wrap spacing={4}
          _hover={{
            color: '#197DDA'}}>
            <WrapItem>
              <Button color='white' variant='outline'>ALL</Button>
            </WrapItem>
            <WrapItem>
              <Button color='white' variant='outline'>DAPP</Button>
            </WrapItem>
            <WrapItem>
              <Button color='white' variant='outline'>BLOCKCHAIN</Button>
            </WrapItem>
            <WrapItem>
              <Button color='white' variant='outline'>NFT</Button>
            </WrapItem>
            <WrapItem>
              <Button color='white' variant='outline'>CRYPTOCURRENCY</Button>
            </WrapItem>
          </Wrap>
        </Stack>

        <div className="feature-buttom">
          <Swiper 
            spaceBetween={30}
            slidesPerView={4}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }} // Add autoplay with 3 seconds duration
            // breakpoints={{
            //   870: {
            //     slidesPerView: 2,
            //   },
            // }}
          >
            {slides.map(slide => (
              <SwiperSlide key={slide.id}>
                <Box
                className={`boxes${slide.id} allboxes`}
                bgImage={slide.image}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                 >
                  <h2 style={{fontSize:'2rem', fontWeight:'bold'}}>{slide.title}</h2>
                  <p>{slide.description}</p>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Feature

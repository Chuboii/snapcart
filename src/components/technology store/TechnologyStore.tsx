import { FC } from "react";
import {Container,Image,Text, H1} from './TechnologyStore.style'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const quickAccessItems = [
    {
        image: '/src/assets/tv.jpg',
        text:"Hikers 43' Frameless FHD Flatscreen"
    },
    {
        image: '/src/assets/airboard.jpg',
        text:"F9 Wireless Fingerprint Earpod"
    },
    {
        image: '/src/assets/powerbank.jpg',
        text:"20000mah Itel Powerbank"
    },
    {
        image: '/src/assets/phone.jpg',
        text:"Redmi Note 11 Andriod 12"
    },
    {
        image: '/src/assets/Groceries.png',
        text:"Groceries"
    },
    {
        image: '/src/assets/Fridge.png',
        text:"Refrigerators"
    },
    {
        image: '/src/assets/generators.png',
        text:"Generators"
    },
    {
        image: '/src/assets/mobile_appliances.png',
        text:"Mobile Accessories"
    },
    {
        image: '/src/assets/mens_sneakers.png',
        text:"Men's Sneakers"
    },
    {
        image: '/src/assets/fashion.jpeg',
        text:"Fashion"
    }

]

const TechnologyStore:FC = () => {
  return (
      <>
          <Container>
                <H1>Technology Store</H1>
               
                <Swiper
        spaceBetween={10}
        loop={false}
              slidesPerView={window.innerWidth <= 768 ? 4 : 7}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2000, // set the delay in milliseconds
          disableOnInteraction: false, // keep autoplay running when user interacts with the swiper
        }}
          >
                {quickAccessItems.map(item => (
                    <SwiperSlide>
                            <Image src={item.image}/>
                        <Text>{item.text }</Text>
                    </SwiperSlide>
                ))
                        }
            </Swiper>
             
        </Container>
      </>
  )
}

export default TechnologyStore
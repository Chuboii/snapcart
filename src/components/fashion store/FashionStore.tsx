import { FC } from "react";
import {Container,Image,Text, H1} from './FashionStore.style'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';





const quickAccessItems = [
    {
        image: '/src/assets/5k_store.png',
        text:"5000 Store"
    },
    {
        image: '/src/assets/Smartphone.jpg',
        text:"Phones & Tables"
    },
    {
        image: '/src/assets/tv.png',
        text:"Televisions"
    },
    {
        image: '/src/assets/conmputing.png',
        text:"Computing Deals"
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
        image: '/src/assets/FashionStore.jpeg',
        text:"FashionStore"
    }

]
const FashionStore:FC = () => {
  
  return (
      <>
          <Container>
                <H1>Fashion Store</H1>
               
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

export default FashionStore
import { FC } from "react";
import {Container,Image,Text, H1} from './QuickAccess.style'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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
        image: '/src/assets/fashion.jpeg',
        text:"Fashion"
    }

]

const QuickAcccess: FC = () => {
    
    return (
        <>
            <Container>
                <H1>Quick Access</H1>
               
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



export default QuickAcccess
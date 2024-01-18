import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import { Image, Container } from "./AdSlide.style";
import ad1 from '../../assets/flashsell.png'
import ad2 from '../../assets/slide 1.png'
import ad3 from '../../assets/slide 2.jpg'
import ad4 from '../../assets/slide 3.jpg'

const AdSlider: FC = () => {
  return (
      <>
                   <Container>
      <Swiper
        spaceBetween={50}
        loop={true}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2000, // set the delay in milliseconds
          disableOnInteraction: false, // keep autoplay running when user interacts with the swiper
        }}
          >
              <SwiperSlide>
                <Image src={ad1}/>
        </SwiperSlide>
              <SwiperSlide>
                  <Image src={ad2} />
              </SwiperSlide>
              <SwiperSlide>
                  <Image src={ad3} />
              </SwiperSlide>
              <SwiperSlide>
                  <Image src={ad4} />
                  </SwiperSlide>
              </Swiper>
              </Container>
    </>
  );
};

export default AdSlider;

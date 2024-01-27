import { FC } from "react";
import {Container,Image,Text, H1, Box, Wrap} from './DisplayStore.style'
import "swiper/css";

const quickAccessItems = [
    {
        image: '/src/assets/5k_store.png',
        text:"5000 Store"
    },
    {
        image: '/src/assets/Smartphone.jpg',
        text:"DisplayStore & Tables"
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

const DisplayStore:FC = () => {
  return (
      <>
          <Container>
                <H1>SHOP NAME</H1>
               
<Wrap>
                  {quickAccessItems.map(item => (
                      <Box>
                          <Image src={item.image} />
                          <Text>{item.text}</Text>
                      </Box>
                  ))
                  }
              </Wrap>
             
        </Container>
      </>
  )
}

export default DisplayStore
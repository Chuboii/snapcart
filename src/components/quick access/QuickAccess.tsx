import { FC } from "react";
import {Container, Wrap,Image,Text } from './QuickAccess.style'


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
                {quickAccessItems.map(item => (
                    <Wrap>

                            <Image src={item.image}/>
                      
                        <Text>{item.text }</Text>
                    </Wrap>
                ))
                }
        </Container>
        </>
    )
}



export default QuickAcccess
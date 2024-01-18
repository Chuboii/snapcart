import { FC } from "react";
import {Container, Item, Icon} from './Menu.style'

const Menu: FC = () => {

    return (
        <>
        <Container>
                <Item>
                    <Icon></Icon>
                    Supermarket</Item>
                <Item>
                    <Icon></Icon>Health & Beauty</Item>
      <Item>   <Icon></Icon>Home & Office</Item>
      <Item>   <Icon></Icon>Appliances</Item>
      <Item>   <Icon></Icon>Phones & Tablets</Item>
      <Item>   <Icon></Icon>Computing</Item>
      <Item>   <Icon></Icon>Electronics</Item>
      <Item>   <Icon></Icon>Fashion</Item>
      <Item>   <Icon></Icon>Baby Products</Item>
      <Item>   <Icon></Icon>Gaming</Item>
      <Item>   <Icon></Icon>Sporting Goods</Item>
      <Item>   <Icon></Icon>Other categories</Item>         
        </Container>
        </>
    )
}

export default Menu
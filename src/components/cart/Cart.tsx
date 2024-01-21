import { FC } from "react";
import {Container,Checkout, Contain, Wrapper,MinusIcon, PlusIcon, H1, Wrap, Box, Image, Text, PriceWrap, Discount, Percent, Price, Icon, Num,Remove} from './Cart.style'
import img from '/src/assets/download.jpeg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Cart: FC = () => {
    

    return (
        <>
            <Container>
                <H1> <ClearIcon sx={{marginRight:".5rem"}} /> Cart (1)</H1>
                <Contain>
                <Wrapper>
                <Wrap>
                    <Box>
                        <Image src={img} />
                        <Text>Redmi Note 10s</Text>
                    </Box>
                    <PriceWrap>
                        <Discount>N 1900</Discount>
                        <Price><span style={{textDecoration:"line-through"}}>N 2800</span> <Percent>-32%</Percent></Price>
                    </PriceWrap>
                </Wrap>

                <Wrap>
                    <Box style={{alignItems:"center", marginTop:".5rem"}}>
                        <Remove><Icon><DeleteOutlineIcon/></Icon> Remove</Remove>
                    </Box>

                    <Box style={{ alignItems: "center" }}>
                        <MinusIcon><RemoveIcon/></MinusIcon>
                        <Num>1</Num>
                        <PlusIcon><AddIcon/></PlusIcon>
                    </Box>
                    </Wrap>
                </Wrapper>

                <Wrapper>
                <Wrap>
                    <Box>
                        <Image src={img} />
                        <Text>Redmi Note 10s</Text>
                    </Box>
                    <PriceWrap>
                        <Discount>N 1900</Discount>
                        <Price><span style={{textDecoration:"line-through"}}>N 2800</span> <Percent>-32%</Percent></Price>
                    </PriceWrap>
                </Wrap>

                <Wrap>
                    <Box style={{alignItems:"center", marginTop:".5rem"}}>
                        <Remove><Icon><DeleteOutlineIcon/></Icon> Remove</Remove>
                    </Box>

                    <Box style={{ alignItems: "center" }}>
                        <MinusIcon><RemoveIcon/></MinusIcon>
                        <Num>1</Num>
                        <PlusIcon><AddIcon/></PlusIcon>
                    </Box>
                    </Wrap>
                </Wrapper>

                <Wrapper>
                <Wrap>
                    <Box>
                        <Image src={img} />
                        <Text>Redmi Note 10s</Text>
                    </Box>
                    <PriceWrap>
                        <Discount>N 1900</Discount>
                        <Price><span style={{textDecoration:"line-through"}}>N 2800</span> <Percent>-32%</Percent></Price>
                    </PriceWrap>
                </Wrap>

                <Wrap>
                    <Box style={{alignItems:"center", marginTop:".5rem"}}>
                        <Remove><Icon><DeleteOutlineIcon/></Icon> Remove</Remove>
                    </Box>

                    <Box style={{ alignItems: "center" }}>
                        <MinusIcon><RemoveIcon/></MinusIcon>
                        <Num>1</Num>
                        <PlusIcon><AddIcon/></PlusIcon>
                    </Box>
                    </Wrap>
                </Wrapper>

                <Wrapper>
                <Wrap>
                    <Box>
                        <Image src={img} />
                        <Text>Redmi Note 10s</Text>
                    </Box>
                    <PriceWrap>
                        <Discount>N 1900</Discount>
                        <Price><span style={{textDecoration:"line-through"}}>N 2800</span> <Percent>-32%</Percent></Price>
                    </PriceWrap>
                </Wrap>

                <Wrap>
                    <Box style={{alignItems:"center", marginTop:".5rem"}}>
                        <Remove><Icon><DeleteOutlineIcon/></Icon> Remove</Remove>
                    </Box>

                    <Box style={{ alignItems: "center" }}>
                        <MinusIcon><RemoveIcon/></MinusIcon>
                        <Num>1</Num>
                        <PlusIcon><AddIcon/></PlusIcon>
                    </Box>
                    </Wrap>
                    </Wrapper>
                </Contain>

                <Checkout>Checkout</Checkout>
        </Container>
        </>
    )
}

export default Cart
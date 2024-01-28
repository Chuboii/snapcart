import { FC, useCallback } from "react";
import {Container,Checkout, Contain, Wrapper,MinusIcon,PlusIcon, H1, Wrap, Box, Image, Span,Text, PriceWrap, Discount, Percent, Price, Icon, Num,Remove} from './Cart.style'
import img from '/src/assets/download.jpeg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/store/store";
import { toggleCart } from "../../utils/reducers/toggle reducer/toggleReducer";


const Cart: FC = () => {
    const isCartToggled = useSelector((state: RootState) => state.toggle.toggleCart)
    const dispatch = useDispatch()
    
    const toggleCartFunction = useCallback(() => {
        dispatch(toggleCart())
    }, [dispatch])

    return (
        <>
            <Container position={isCartToggled ? '0' : "-10000px"}>
                <H1>
                    <Span>
                    <ClearIcon onClick={toggleCartFunction} sx={{ marginRight: ".5rem" }} /> Cart (1)
                     </Span>
                    <Checkout>Checkout</Checkout>
                </H1>
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
                </Contain>

       
        </Container>
        </>
    )
}

export default Cart
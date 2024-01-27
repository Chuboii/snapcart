import { FC, useCallback, useEffect, useState } from "react";
import {
    Container, Form,WrapLogo, Wrapper,Wrap, Icon4, Icon5, Icon6, Logo, Button, Input, Icon1, Icon2, Icon3, Text, Box
} from './Navbar.style'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import Cart from "../cart/Cart";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../utils/reducers/toggle reducer/ToggleReducer";

const Navbar: FC = () => {
const [isScreenScrolled, setIsScreenScrolled] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(() => {
    
        const isScreenScrolled = () => {
            const screenHeight = window.scrollY

            if (screenHeight > 250) {
                setIsScreenScrolled(true)
            }
            else {
                setIsScreenScrolled(false)
            }

        }
        window.addEventListener("scroll", isScreenScrolled)


        return () => {
            window.removeEventListener("scroll", isScreenScrolled)
        }
    }, [isScreenScrolled])


    const toggleCartFunction = useCallback(() => {
     dispatch(toggleCart())
},[dispatch])

    return (
        <>
            <Cart/>
            <Container position={isScreenScrolled  ? "sticky" : "relative"}>
             <Wrapper>
                <WrapLogo>
                  <Icon1> <HorizontalSplitOutlinedIcon/> </Icon1>
                    <Logo>SNAPCART</Logo>
                </WrapLogo>

                <Form>
                    <Icon2></Icon2>
                    <Input placeholder="Search products, brands and categories" autoComplete='true' />
                    <Button>Search</Button>
                </Form>
                </Wrapper>

                <Wrap>
                    <Box>
                        <Icon3><Person2OutlinedIcon/></Icon3>
                        <Text>Account</Text>
                        <Icon4><KeyboardArrowDownOutlinedIcon/></Icon4>
                    </Box>

                    <Box>
                        <Icon5><HelpOutlineOutlinedIcon/></Icon5>
                        <Text>Help</Text>
                        <Icon4><KeyboardArrowDownOutlinedIcon/></Icon4>
                    </Box>

                    <Box onClick={toggleCartFunction}>
                        <Icon6><ShoppingCartOutlinedIcon/></Icon6>
                        <Text>Cart</Text>
                    </Box>

                </Wrap>
            </Container>
            
    <Outlet/>
        </>
    )
}

export default Navbar
import { FC } from 'react'
import { Link } from 'react-router-dom'
import {FooterContainer, Header, Logo, Nav, Wrap, LinkWrap, Text, Form, Input, Button} from './Footer.style'

const linkStyle = {
    color: "#eee",
    margin: '.3rem 0'
}

const Footer: FC = () => {

    return (
        <>
            <FooterContainer>
                <Header>
                    <Logo>SNAPCART</Logo>

                    <Wrap>
                        <Text>NEW TO SNAPCART?</Text>
                        <Text>Subscribe to our newsletter to get updates on our latest offers!</Text>
                        <Form>
                            <Input placeholder="Enter Email Address" />
                            <Button>Subscribe</Button>
                    </Form>
                    </Wrap>
                </Header>

                <Nav>

      <LinkWrap>
        <Text>NEED HELP?</Text>
        <Link style={linkStyle} to={"/chat"}>Chat with us</Link>
        <Link style={linkStyle} to={"/help-center"}>Help Center</Link>
        <Link style={linkStyle} to={"/contact-us"}>Contact Us</Link>
      </LinkWrap>
      <LinkWrap>
        <Text>USEFUl LINKS</Text>
        <Link style={linkStyle} to={"/service-center"}>Service Center</Link>
        <Link style={linkStyle} to={"/how-to-shop"}>How to shop on SNAPCART?</Link>
        <Link style={linkStyle} to={"/delivery-options"}>Delivery options and timelines</Link>
      </LinkWrap>
      <LinkWrap>
        <Text>ABOUT SNAPCART</Text>
        <Link style={linkStyle} to={"/about-us"}>About us</Link>
        <Link style={linkStyle} to={"/snapcart-careers"}>Snapcart careers</Link>
        <Link style={linkStyle} to={"/snapcart-express"}>Snapcart Express</Link>
      </LinkWrap>
      <LinkWrap>
        <Text>MAKE MONEY WITH SNAPCART</Text>
        <Link style={linkStyle} to={"/sell-on-snapcart"}>Sell on SNAPCART</Link>
        <Link style={linkStyle} to={"/vendor-hub"}>Vendor hub</Link>
        <Link style={linkStyle} to={"/sales-consUltant"}>Become a Sales Consultant</Link>
  
      </LinkWrap>
    </Nav>
        </FooterContainer>
        </>
    )
}

export default Footer
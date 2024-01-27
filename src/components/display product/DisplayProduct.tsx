import { FC } from "react"
import {Container, Wrapper, Wrap, ImageBox, Image, Share, Bold, ShareButton, Box, Official, Title, PriceBox, Brand, Price, Discount, Percentage, Available, RatingsBox, Icon, Text, Span,ButtonCart,LocationBox, Select, Option, WarrantyBox,WrapBox, TextBox } from './DisplayProduct.style'
import img from '../../assets/phone.jpg'

const DisplayProduct:FC = () => {
  return (
      <>
          
       <Container>
       <Wrapper>
                  <Wrap>
                  <ImageBox>
                          <Image src={img } />
                      <Share>
                          <Bold>SHARE THIS PRODUCT</Bold>
                      <ShareButton>Share</ShareButton>
                      </Share>
                  </ImageBox>

                  <Box>
                      <Official>Official Store</Official>
                    <Title>Xiaomi Redmi Note 13 Pro Andriod 12</Title>
                      <Brand>Brand: XIAOMI</Brand>
                      <PriceBox>
                          <Price>N 199,500</Price>
                          <Discount>200,000</Discount>
                          <Percentage>-4%</Percentage>
                      </PriceBox>
                      <Available>In stock</Available>
                      <RatingsBox>
                          <Icon></Icon>
                          <Text>(No ratings available)</Text>
                      </RatingsBox>

                      <ButtonCart>
                          <Icon></Icon>
                          <Span>Add to cart</Span>
                      </ButtonCart>
                  </Box>

                  </Wrap>

                  <Wrap>
                      <Bold>DELIVERY & RETURNS</Bold>
                      <Bold>Choose your location</Bold>
                      <LocationBox>
                          
                          <Select>
                              <Option value=""></Option>
                          </Select>
                      </LocationBox>

                      <LocationBox>
                          
                          <Select>
                              <Option value="English">Abia</Option>
                              <Option value="English">imo</Option>
                          </Select>
                      </LocationBox>

                      <WarrantyBox>
                          <WrapBox>
                              <Icon>
                                  
                              </Icon>
                              <TextBox>
                                  <Bold>Return Policy</Bold>
                                  <Text>Free  return within 7 days for ALL</Text>
                              </TextBox>
                          </WrapBox>
                      </WarrantyBox>
                  </Wrap>
              </Wrapper>
              
            
      </Container>
      </>
  )
}

export default DisplayProduct
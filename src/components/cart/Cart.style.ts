import styled from "styled-components";

export const Container = styled.div`
 position:fixed;
 right:0;
 width:35%;
 background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 25px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
height: 100dvh;
z-index:22;
overflow-y: scroll;
box-sizing: border-box;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`
export const Box = styled.div`
display: flex;
align-items: flex-start;
`
export const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const Icon = styled.div`
color:#E08041;
display: flex;
`
export const Text = styled.p`
margin: 0;
padding: 0;
font-weight: 800;
`
export const PriceWrap = styled.div`
display: flex;
flex-direction:column;
align-items: flex-end;
`
export const Price = styled.p`
  display: flex;
  align-items: center;
  font-weight: 100;
`
export const Num = styled.div`
 font-weight: 800;
`
export const Percent = styled.div`
  background-color: #FEF3E9;
  padding:.2rem;
  border-radius: 5px;
  margin-left: .4rem;
  font-weight: 100;
  color: #E08041;
`
export const Remove = styled.div`
 color:  #E08041;
 padding:.5rem .4rem;
 padding-right: .8rem;
 border-radius: 4px;
 background-color:  #FEF3E9;
 display:flex;
 justify-content: center;
 @media screen and (min-width: 768px) {
 cursor:pointer;
    }
`
export const Contain = styled.div`


`
export const Checkout = styled.button`
position:sticky;
bottom:0;
left:0;
right:0;
color:white;
width:100%;
padding:.9rem;
background-color: #E08041 ;
border-radius: 0;

`
export const Wrapper = styled.div`
  margin:2rem 0;
  padding: 1rem;
`
export const Discount = styled.div`
  color:black;
  font-weight: 800;
`
export const H1 = styled.h2`
  display:flex;
  position:sticky;
  top:0;
  left: 0; 
  margin:0;
  background: rgba( 255, 255, 255, 0.25 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 4px );
  right: 0;
  align-items:center;
  padding: 1rem;
`
export const MinusIcon = styled.div`
  background-color: #E08041;
  color: white;
  margin-right:.8rem;
  box-shadow:0 0 10px 0 rgba(0,0,0, .3);
padding:.2rem;
display: flex;
border-radius: 4px;
@media screen and (min-width: 768px) {
 cursor:pointer;
    }
`
export const PlusIcon = styled.div`
background-color: #E08041;
color:white;
box-shadow:0 0 10px 0 rgba(0,0,0, .3);
padding:.1rem;
display: flex; 
padding: .2rem;
margin-left:.8rem;
border-radius: 4px;

@media screen and (min-width: 768px) {
 cursor:pointer;
 }
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: .3rem;
`
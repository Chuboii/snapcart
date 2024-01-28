import styled from "styled-components";

interface PositionProp {
  position: string;
}
export const Container = styled.div<PositionProp>`
 position:fixed;
 right:${({position}) => position};
 width:35%;
 background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 25px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
height: 100dvh;
transition: all .5s;
z-index:22;
overflow-y: scroll;
box-sizing: border-box;
scrollbar-color: #6969dd #e0e0e0;
scrollbar-width: thin;
border: 1px solid rgba( 255, 255, 255, 0.18 );


&::-webkit-scrollbar {
  width: 10px;
}
&::-webkit-scrollbar-track {
  background-color: white;
}

&::-webkit-scrollbar-thumb {
  background:orange;
  border-radius: 130px;
}

@media screen and (max-width:768px){
  width:100%;
}
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
font-size: 17px;
color:white;
padding:.9rem;
background-color: #E08041 ;
border-radius: 7px;
padding: .5rem 1rem;
`
export const Wrapper = styled.div`
  margin:0;
  padding: 1rem;
`
export const Discount = styled.div`
  color:black;
  font-weight: 800;
`
export const Span = styled.div`
   display:flex;
   align-items: center;
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
  justify-content: space-between;
  padding:.5rem 1rem;
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
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  position: relative;
  bottom: 1rem;
`
export const H1 = styled.p`
 color:orange;
 font-family: 'Climate Crisis', sans-serif;
`
export const Box = styled.div`
 display: flex;
flex-direction: column;
width: 220px; 
height:250px;
margin: 1.5rem .5rem;
transition: all .5s;
&:hover{
    transform: scale(1.05);

 }
`

export const Wrap = styled.div`
 display: flex;
flex-wrap: wrap;
justify-content: center;
 transition: all .5s;
 border-radius: 10px;
 padding: 0;
@media screen and (max-width:768px){
  width:100%;
  height: 100px;
}
`

export const Text = styled.p`
  margin: 0;
  text-align: center;
  
@media screen and (max-width:768px){
   font-size: 14px;
    
}
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

`
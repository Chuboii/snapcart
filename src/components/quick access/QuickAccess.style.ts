import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-wrap:wrap;
   margin: auto;
   justify-content: center;
   margin-bottom: 10rem;
   background-color: #eee;
 width: 90%;
padding: 1rem 0;
 border-radius: 10px;

 
@media screen and (max-width:768px){
  display: grid; 
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
;
}
`
export const Wrap = styled.div`
 margin: 1.5rem .5rem;
 width: 200px;
 height: 200px;
 transition: all .5s;
 border-radius: 10px;
 transition: all .5s;
 padding: 0;
@media screen and (max-width:768px){
  width: 80px;
  height: 100px;
  margin-bottom: 2rem;

}
 &:hover{
    transform: scale(1.05);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
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
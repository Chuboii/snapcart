import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  width:100%;
  padding: .5rem;
  background: whitesmoke;
  color: black;
  margin-bottom: 1rem;
   border-radius: 10px;
   margin-right: 1rem;
   @media screen and (max-width:768px){
    display:none;
   }
`
export const Item = styled.div`
  padding: .3rem;
  font-size: 14px;

  &:hover{
    color: #F68D48;
  }

  @media screen and (min-width:768px){
    cursor: pointer;
  }
`
export const Icon = styled.div`

`
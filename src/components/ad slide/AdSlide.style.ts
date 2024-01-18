import styled from "styled-components";

export const Image = styled.img`
  width:100%;
height: 400px;

@media screen and (max-width:768px){
    width:100%;
    height: 200px;
    border-radius: 10px;
}
`
export const Container = styled.div`
 overflow-x: scroll;
 margin-top: 8rem;
padding: 0 .5rem;
`
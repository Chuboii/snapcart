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
padding: 0 .5rem;
overflow-x: scroll;
@media screen and (max-width:768px){
 margin-top: 4rem;
}
`
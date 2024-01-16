import styled from "styled-components";


export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
 

  @media screen and (max-width:768px){
    position:fixed;
    top:0;
    left: 0;
    right: 0;
    padding: 1rem;
  }
`
export const Box = styled.div`
  margin: 0 .8rem;
  display:flex;
  cursor:pointer;

  @media screen and (max-width:768px){
    margin: 0 .4rem;
  }
`
export const Wrap = styled.div`
 display: flex;
 align-items: center;
`
export const Input = styled.input`
width: 70%;
padding: .8rem .4rem;
border-radius: 5px;
border: 1px solid;
`
export const Text = styled.div`
margin:0 .5rem;
display: block;

@media screen and (max-width:768px){
  display: none;
}
`
export const Button = styled.button`
  background-color: #E08041;
  color: white;
  margin-left: .5rem;
`
export const Logo = styled.div`
  font-family: 'Bungee Spice', sans-serif;
  font-size:25px;

  @media screen and (max-width:768px){
  margin-left: .5rem;
}
`
export const Icon1 = styled.div`
display: none;

@media screen and (max-width:768px){
  display: block;
}

`
export const Icon2 = styled.div`


@media screen and (max-width:768px){
  display: block;
}

`
export const Icon3 = styled.div`


@media screen and (max-width:768px){
  display: block;
  margin: 0;
  padding: 0;
}

`
export const Icon4 = styled.div`
display: block;

@media screen and (max-width:768px){
  display: none;
}

`
export const Icon5 = styled.div`
display: block;
@media screen and (max-width:768px){
  display: none;
}

`
export const Icon6 = styled.div`


@media screen and (max-width:768px){
  display: block;
}

`
export const Form = styled.form`
  width: 50%;
  @media screen and (max-width:768px){
  display: none;
}
`


import styled from "styled-components";

interface PositionProp {
  position: string;
}

export const Container = styled.nav<PositionProp>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  z-index:12;
  background:white;
  align-items: center;
  position: ${({ position }) => position};
  left:0;
  right:0;
  top:0;
  transition:all 19s;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
 

  @media screen and (max-width:768px){
    padding: 1rem;
  }
`
export const Box = styled.div`
  display:flex;
  cursor:pointer;
  transition: all .3s;
&:hover{
  color: #E08041;
}
  @media screen and (max-width:768px){
  margin: 0 .5rem;
  }
`
export const WrapLogo = styled.div`
 display: flex;
 margin-right: 2rem;
`
export const Wrap = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 30%;

 @media screen and (max-width:768px){
 display: flex;
 justify-content: center;
}
`
export const Wrapper = styled.div`
display: flex;
align-items:center;
width: 70%;
`

export const Input = styled.input`
width: 70%;
padding: .8rem .4rem;
border-radius: 5px;
border: 1px solid;
@media screen and (min-width: 768px) and (max-width: 1150px){
     margin-right:1rem;
     width: 50%;
  }
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
@media screen and (min-width: 768px) and (max-width: 1150px){
     margin-right:1rem;
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
  width: 100%;
  @media screen and (max-width:768px){
  display: none;

}
`


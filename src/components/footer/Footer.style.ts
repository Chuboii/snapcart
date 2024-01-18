import styled from "styled-components";

export const FooterContainer = styled.footer`
color:#eee;
background-color: #535357;
font-size: 13px;
position: relative;
bottom:0;
left: 0;
right: 0;
`
export const Header = styled.header`
background-color: #313133;
display: flex;
padding: 1.4rem 4rem;
@media screen and (max-width:768px){
  display: block;
  padding: 1rem;
}
`
export const LinkWrap = styled.div`
display: flex;
flex-direction: column;

`
export const Text = styled.p`
font-weight: 700;
`
export const Logo = styled.div`
margin-right: 4rem;
font-family: 'Bungee Spice', sans-serif;
  font-size:25px;
`
export const Ul = styled.ul`

`
export const Li = styled.li`

`
export const Button = styled.button`
background-color: #F68D48;
color: white;
margin-left:.5rem;
`
export const Input = styled.input`
padding:.7rem 1rem;
width: 80%;
border-radius: 5px;
border: 1px solid;
`
export const Form = styled.form`
width:100%;
display: flex;
`
export const Nav = styled.nav`
 padding: 1rem 6rem;
 display: flex;
 flex-wrap: wrap;
justify-content: space-between;

@media screen and (max-width:768px){
 display: grid;
 grid-template-columns: 1fr 1fr;
 padding: .3rem 1rem;
}
`
export const Wrap = styled.div`
@media screen and (max-width:768px){
  display: block;
}
`
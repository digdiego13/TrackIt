import styled from "styled-components"
import { Link } from "react-router-dom";

const Content = styled.div`
    background-color: white;
    margin: 68px auto 20px auto;
    display: flex;
    flex-direction:column;
    align-items:center;

`

const LoginButton = styled.button`
    color: white;
    height: 45px;
    max-width: 350px;
    width: 100%;
    font-size:20px;
    margin: 5px 0px 5px 0px;
    background-color: #52B6FF;
    border-radius: 3px;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.loading ? 0.4 : 1}

        
`
const LinkLogin = styled.div`
color: #52B6FF;
margin-top: 30px;
text-decoration: underline;
`
const EntrarClass = styled.p`
    display: ${props=> props.loading ? "none" : "flex"};
    color: white;
    
`


export {
    Content,
    LoginButton,
    LinkLogin,
    EntrarClass
}
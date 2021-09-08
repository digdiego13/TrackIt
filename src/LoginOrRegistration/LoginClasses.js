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
    
`
const LinkLogin = styled.div`
color: #52B6FF;
margin-top: 30px;
text-decoration: underline;
`



export {
    Content,
    LoginButton,
    LinkLogin
}
import styled from "styled-components"

const LogoClass = styled.img`
    height: 180px;
    width: 180px;
    font-size: 200px;
`

const Input = styled.input`
    border:solid 2px gray;
    border-radius: 3px;
    text-decoration:none;
    color: gray;
    height: 45px;
    max-width: 350px;
    width: 100%;
    font-size:20px;
    margin: 5px 0px 5px 0px;
`
const NavBarClass = styled.header`
    height: 70px;
    width: 100vw;
    background-color: #126BA5;
    box-shadow: 2px 2px 2px gray;
    display: flex;
    padding: 0px 30px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0px;
    top: 0px;
    font-family: 'Playball', cursive;
    color: white;
    font-size: 39px;
    box-sizing: border-box;
    


    img{
        height: 51px;
        width: 51px;
        border-radius: 50%;
    }
`

const ContentClass = styled.div`
    background-color: #E5E5E5;
    padding: 100px 30px;
    width: 100vw;
    
    box-sizing: border-box;

    
`

const Footer = styled.footer`

`


export {
    LogoClass,
    Input,
    NavBarClass,
    ContentClass
}
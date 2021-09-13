import styled from "styled-components";

const Container = styled.div`
    height: 70px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 36px;
    background-color: white;
    bottom: 0px;
    left: 0px;
    right: 0px;
    text-decoration: none;

        h1{
            color: #52B6FF;
            text-decoration:  white underline;
        }
`

const ProgressClass = styled.div`
    height: 90px;
    width: 90px;
    position:absolute;
    left: calc(50% - 45px);
    bottom: 5px;
    background-color: white;
    border-radius: 50%;
`

export {
    Container,
    ProgressClass
}
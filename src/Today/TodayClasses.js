import styled from "styled-components";


const ProgressClass = styled.div`
    color: green;
    font-size: 18px;
    margin: 10px 0px;

`
const TodayClass = styled.h1`
    color: #126BA5;
    font-size: 23px;

`

const Container = styled.div`
    background-color:white;
    box-sizing: border-box;
    padding: 18px 18px;
    color: #DBDBDB;
    border-radius:4px;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;

    h1{
        font-size: 23px;
        color: #666666;
        margin-bottom: 20px;
        margin-top: 10px;

    }
    p{
        font-size: 13px;
    }

`

const CheckButton = styled.div`
    color:${(props) => props.done ? 'green' : 'gray'};;
    font-size:100px;
    
`
const SequeciaAtual = styled.span`
    color:${(props) => props.done ? 'green' : 'gray'};
`

const Recorde = styled.span`
    color: ${(props)=> props.diff === 0 ? 'green' : 'gray'};
`


export {
    ProgressClass,
    TodayClass,
    Container,
    CheckButton,
    SequeciaAtual,
    Recorde
}
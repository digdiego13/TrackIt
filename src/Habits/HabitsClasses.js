import styled from "styled-components";

const MyHabitsClass = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;

    button{
        width:45px;
        height: 35px;
        border: none;
        border-radius:3px;
        color:white;
        background-color:#52B6ff;
        font-size: 30px;
    }
    h1{
        color: #126BA5;
        font-size: 23px;

    }
`
const Trash = styled.div`
    color: red;
    justify-content:flex-end;
    border:none;
    display:flex;
    
`

const CreateHabitsClass = styled.div`
    background-color:white;
    box-sizing: border-box;
    padding: 18px 18px;
    border-radius:4px;
    margin: 20px 0px;
    opacity: ${props => props.loading ? 0.4 : 1};

        h1{
            color: #666666;
        }
    
`
const ButtonsClasses = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 8px;
    margin-bottom: 36px;
    
`

const ButtonDaysClass = styled.button`
    height:30px;
    width:30px;
    color: #dbdbdb;
    border: solid 1px gray;
    border-radius: 4px;
    background-color:${(props)=> props.selectedStyle ? 'green' : "white"};

`

const SaveHabitsButtons = styled.div`

    display: flex;
    gap: 20px;
    justify-content: flex-end;
    
`

const ButtonClass = styled.div`
    height: 35px;
    width: 84px;
    background-color: ${(props)=>props.background};
    color: ${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:4px;
    
`
const MsgNoHabits = styled.p`
    color: #6666;
    display: ${(props)=> props.habilitado ? 'initial' : 'none'};
    margin-top: 50px;
`

const SaveClass = styled.p`
    display: ${props => props.loading ? 'none' : 'flex'};
    color: white;
`

export {
    MyHabitsClass,
    ButtonsClasses,
    SaveHabitsButtons,
    CreateHabitsClass,
    ButtonClass,
    MsgNoHabits,
    ButtonDaysClass,
    Trash,
    SaveClass
}
import { Container, CheckButton, SequeciaAtual, Recorde } from "./TodayClasses"
import { checkHabit, getTodayHabits, unCheckHabit } from "../Service";
import { useContext } from "react";
import TokenContext from "../Contexts/Token";

export default function TodayHabit({habit, todayHabits, setTodayHabits}) {
    console.log(habit)
    const {token} = useContext(TokenContext);


    function changeStatusDone() {

        if(habit.done === true) {
            unMarkCheck()
        }else{markCheck()
        }
    }

    function markCheck () {

        checkHabit(habit.id, token)
        .then((res)=> getTodayHabits(token).then((res)=> setTodayHabits(res.data)))
    }

    function unMarkCheck() {
        unCheckHabit(habit.id, token)
        .then((res)=> getTodayHabits(token).then((res)=> setTodayHabits(res.data)))
    }

    return(
        <Container>
            <div>
                <h1>{habit.name}</h1>
                <p>Sequencia Atual: <SequeciaAtual done={habit.done}>{`${habit.currentSequence} dia(s)`}</SequeciaAtual></p>
                <p>Seu Recorde: <Recorde diff={habit.currentSequence - habit.highestSequence}>{`${habit.highestSequence} dia(s)`}</Recorde></p>
            </div>
            <CheckButton done={habit.done} onClick={changeStatusDone}><ion-icon name="checkbox"></ion-icon></CheckButton>
            
        </Container>
        
    )
}
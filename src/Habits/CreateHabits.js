
import { SaveHabitsButtons, CreateHabitsClass, ButtonsClasses, ButtonClass, ButtonDaysClass } from "./HabitsClasses"
import { Input } from "../SharedStyles"
import { useState, useContext } from "react"
import WeekButtons from "./WeekButtons";
import {tryHabitRegistration} from "../Service"
import TokenContext from "../Contexts/Token";


export default function CreateHabits({sethabitCreationDisplay}) {
    const [habitsDays, setHabitsDays] = useState([])
    const weekDays = ["S", "T", "Q", "Q", "S", "S", "D"];
    const [habitName, setHabitName] = useState('')
    const {token} = useContext(TokenContext);
    let myHabit = {};
    function cancelCreation() {
        sethabitCreationDisplay(false);
    }

    function saveCreation () {
        myHabit = {name: habitName, days: habitsDays}
        console.log( myHabit)
        tryHabitRegistration(myHabit, token).then((res)=> sethabitCreationDisplay(false)).catch(()=> alert('algo deu errado'))
    }

    return(
        <>
        <CreateHabitsClass >
            <Input placeholder='Nome do habito' value={habitName} onChange={(e)=> setHabitName(e.target.value)}></Input>
            <ButtonsClasses>
                {weekDays.map((day, index) => <WeekButtons day={day} index={index} habitsDays={habitsDays} setHabitsDays={setHabitsDays}></WeekButtons>)}
            </ButtonsClasses>
            <SaveHabitsButtons>
                <ButtonClass color='blue' background='white' onClick={cancelCreation}>Cancelar</ButtonClass>
                <ButtonClass color='white' background='blue' onClick={saveCreation}>Salvar</ButtonClass>
            </SaveHabitsButtons>
            
        </CreateHabitsClass>
        </>
    )
}
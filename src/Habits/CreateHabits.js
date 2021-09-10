
import { SaveHabitsButtons, CreateHabitsClass, ButtonsClasses, ButtonClass, ButtonDaysClass } from "./HabitsClasses"
import { Input } from "../SharedStyles"
import { useState, useContext } from "react"
import WeekButtons from "./WeekButtons";
import {tryHabitRegistration, getHabitsList} from "../Service"
import TokenContext from "../Contexts/Token";
import HabitCreationContext from "../Contexts/HabitCreationContext";


export default function CreateHabits({sethabitCreationDisplay}) {
    const {habitName, setHabitName, habitsDays, setHabitsDays, setMyHabitsList, myHabitsList} = useContext(HabitCreationContext);
    const weekDays = ["S", "T", "Q", "Q", "S", "S", "D"];
    const {token} = useContext(TokenContext);
    let myHabit = {};


    function cancelCreation() {
        sethabitCreationDisplay(false);
    }

    function saveCreation () {
        myHabit = {name: habitName, days: habitsDays}
        console.log(token)
        tryHabitRegistration(myHabit, token)
        .then((res)=> {sethabitCreationDisplay(false)
            setHabitsDays([])
            setHabitName('')
            getHabitsList(token).then((res)=> setMyHabitsList([...myHabitsList, res.data[res.data.length-1]]))})
        .catch(()=> alert('algo deu errado'))
       
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
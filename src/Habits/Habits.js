import NavBar from "../Shared/NavBar"
import { ContentClass } from "../SharedStyles"
import MyHabits from "./MyHabits"
import CreateHabits from "./CreateHabits"
import { useState, useEffect, useContext } from "react";
import HabitCreationContext from "../Contexts/HabitCreationContext"
import HabitsList from './HabitsList'
import TokenContext from "../Contexts/Token"


export default function Habits () {
    const[habitCreationDisplay, sethabitCreationDisplay] = useState(false);
    const [habitName, setHabitName] = useState('');
    const [habitsDays, setHabitsDays] = useState([])
    const [myHabitsList, setMyHabitsList] = useState([]);
    const {token} = useContext(TokenContext)
    
    if(token.length === 0){
        return(
            <h1>carregando</h1>
        )
    }

    return(
    <>
    <HabitCreationContext.Provider value={{habitName, setHabitName, habitsDays, setHabitsDays, myHabitsList, setMyHabitsList}}>
    <ContentClass>
        <NavBar></NavBar>
        <MyHabits sethabitCreationDisplay={sethabitCreationDisplay}></MyHabits>
        {habitCreationDisplay ? <CreateHabits sethabitCreationDisplay={sethabitCreationDisplay}></CreateHabits> : ''}
        <HabitsList></HabitsList>
    </ContentClass>
    </HabitCreationContext.Provider>
    </>
    )
}

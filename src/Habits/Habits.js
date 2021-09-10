import NavBar from "../Shared/NavBar"
import { ContentClass } from "../SharedStyles"
import MyHabits from "./MyHabits"
import CreateHabits from "./CreateHabits"
import { MsgNoHabits } from "./HabitsClasses"
import { useState } from "react"

export default function Habits () {
    const[habitCreationDisplay, sethabitCreationDisplay] = useState(false)

    return(
    <ContentClass>
        <NavBar></NavBar>
        <MyHabits sethabitCreationDisplay={sethabitCreationDisplay}></MyHabits>
        {habitCreationDisplay ? <CreateHabits sethabitCreationDisplay={sethabitCreationDisplay}></CreateHabits> : ''}
        
        <MsgNoHabits habilitado= {true}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MsgNoHabits>
    </ContentClass>
    )
}

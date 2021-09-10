import NavBar from "../Shared/NavBar"
import { ContentClass } from "../SharedStyles"
import MyHabits from "./MyHabits"
import CreateHabits from "./CreateHabits"
import { MsgNoHabits } from "./HabitsClasses"

export default function Habits () {

    return(
    <ContentClass>
        <NavBar></NavBar>
        <MyHabits></MyHabits>
        <CreateHabits></CreateHabits>
        <MsgNoHabits habilitado= {true}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MsgNoHabits>
    </ContentClass>
    )
}

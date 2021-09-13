
import { SaveHabitsButtons, CreateHabitsClass, ButtonsClasses, ButtonClass, SaveClass } from "./HabitsClasses"
import { Input } from "../SharedStyles"
import { useContext, useState } from "react"
import WeekButtons from "./WeekButtons";
import {tryHabitRegistration, getHabitsList} from "../Service"
import TokenContext from "../Contexts/Token";
import HabitCreationContext from "../Contexts/HabitCreationContext";
import Loader from "react-loader-spinner";

export default function CreateHabits({sethabitCreationDisplay}) {
    const [loading, setLoading] = useState(false);
    const {habitName, setHabitName, habitsDays, setHabitsDays, setMyHabitsList, myHabitsList} = useContext(HabitCreationContext);
    const weekDays = ["S", "T", "Q", "Q", "S", "S", "D"];
    const {token} = useContext(TokenContext);
    let myHabit = {};


    function cancelCreation() {
        sethabitCreationDisplay(false);
    }

    function saveCreation () {
        setLoading(true)
        myHabit = {name: habitName, days: habitsDays}
        console.log(token)
        tryHabitRegistration(myHabit, token)
        .then((res)=> {sethabitCreationDisplay(false)
            setHabitsDays([])
            setHabitName('')
            getHabitsList(token).then((res)=> setMyHabitsList(res.data))
            setLoading(false)})
        .catch(()=> {alert('algo deu errado')
            setLoading(false);})
       
    }

    return(
        <>
        <CreateHabitsClass loading={loading} >
            <Input disabled={loading} placeholder='Nome do habito' value={habitName} onChange={(e)=> setHabitName(e.target.value)}></Input>
            <ButtonsClasses>
                {weekDays.map((day, index) => <WeekButtons 
                day={day} 
                index={index} 
                habitsDays={habitsDays} 
                setHabitsDays={setHabitsDays}
                loading={loading}>
                </WeekButtons>)}
            </ButtonsClasses>
            <SaveHabitsButtons>
                <ButtonClass disabled={loading} color='#52B6FF' background='white' onClick={cancelCreation}>Cancelar</ButtonClass>
                <ButtonClass disabled={loading} background='#52B6FF' onClick={saveCreation}>
                    <SaveClass loading={loading}>Salvar</SaveClass>
                    <Loader visible={loading} type='ThreeDots' color='white' width="50px"></Loader>
                    </ButtonClass>
            </SaveHabitsButtons>
            
        </CreateHabitsClass>
        </>
    )
}
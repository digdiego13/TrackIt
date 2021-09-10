import { useEffect, useState, useContext } from "react";
import HabitCreationContext from "../Contexts/HabitCreationContext";
import TokenContext from "../Contexts/Token";
import { getHabitsList, deleteHabitServer } from "../Service";
import { MsgNoHabits } from "./HabitsClasses"
import { CreateHabitsClass, ButtonsClasses, ButtonDaysClass, Trash } from "./HabitsClasses";


export default function HabitsLists() {
    const {myHabitsList, setMyHabitsList} = useContext(HabitCreationContext);
    const {token} = useContext(TokenContext);
    let msgNoHabits = true

    useEffect(() => {
        getHabitsList(token)
        .then((res)=> setMyHabitsList(...myHabitsList, res.data))
    }
   ,[] )

   if(myHabitsList.length!==0) {
       msgNoHabits = false;
    }
   
    function deleteHabit (id) {
        deleteHabitServer(id, token)
        .then((res)=> getHabitsList(token).then((res1)=> setMyHabitsList(res1.data)))
        .catch(()=> alert('nao foi possivel deletar o habito'));
        
        

    }

    console.log(myHabitsList)
    return(
        <>
        {myHabitsList.map((habit, index)=>{
            return(
                <CreateHabitsClass>
                    <h1>{habit.name}</h1>
                    <Trash onClick={()=> deleteHabit(habit.id)}><ion-icon name="trash-outline"></ion-icon></Trash>
                    <ButtonsClasses>
                        <ButtonDaysClass selectedStyle={habit.days.includes(1) ? true : false }>S</ButtonDaysClass>
                        <ButtonDaysClass selectedStyle={habit.days.includes(2) ? true : false }>T</ButtonDaysClass>
                        <ButtonDaysClass selectedStyle={habit.days.includes(3) ? true : false }>Q</ButtonDaysClass>
                        <ButtonDaysClass selectedStyle={habit.days.includes(4) ? true : false }>Q</ButtonDaysClass>
                        <ButtonDaysClass selectedStyle={habit.days.includes(5) ? true : false }>S</ButtonDaysClass>
                        <ButtonDaysClass selectedStyle={habit.days.includes(6) ? true : false }>S</ButtonDaysClass>
                        <ButtonDaysClass selectedStyle={habit.days.includes(7) ? true : false }>D</ButtonDaysClass>
                    </ButtonsClasses>
                </CreateHabitsClass>  
             )
            
            })}

        <MsgNoHabits habilitado= {msgNoHabits}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MsgNoHabits>
        </>
    )
}
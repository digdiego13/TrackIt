import NavBar from "../Shared/NavBar"
import { ContentClass } from "../SharedStyles"
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import {ProgressClass, TodayClass} from "./TodayClasses"
import { useEffect, useContext, useState } from "react";
import TokenContext from "../Contexts/Token"
import { getTodayHabits } from "../Service"
import TodayHabit from "./TodayHabit"
import ProgressContext from "../Contexts/ProgressContext"

export default function Today () {
    
    const {token} = useContext(TokenContext);
    const {progress, setProgress} = useContext(ProgressContext);
    const [todayHabits, setTodayHabits] = useState([])

    useEffect(()=> {
        getTodayHabits(token)
        .then((res)=> {setTodayHabits(res.data)})

    }, [])

    if(token.length===0) {
        return(
            <h1>Carregando</h1>
        )
    }
    
    return(
        <>
        <ContentClass>
            <NavBar></NavBar>
            <TodayClass>{dayjs().locale('pt-br').format(`dddd, DD/MM`)}</TodayClass>
            <ProgressClass>Tu nao fez nada ainda</ProgressClass>
            {todayHabits.map((habit) => {
                return(
                    <TodayHabit habit={habit} todayHabits={todayHabits} setTodayHabits={setTodayHabits}></TodayHabit>
                )
            })}
            
        </ContentClass>
        
        </>
    )
}
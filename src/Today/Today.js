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
import { Link } from "react-router-dom"
import Footer from "../Shared/Footer"

export default function Today () {
    
    const {token} = useContext(TokenContext);
    const {progress, setProgress} = useContext(ProgressContext);
    const [todayHabits, setTodayHabits] = useState([])

    useEffect(()=> {
        getTodayHabits(token)
        .then((res)=> {setTodayHabits(res.data) })

    }, [])

    if(token.length===0) {
        return(
            <h1>Carregando</h1>
        )
    }

    function progressCalculator () {
        let qtdDone = todayHabits.filter((habit)=> habit.done === true).length;
        let percentage = (qtdDone / todayHabits.length) * 100;
        setProgress(percentage.toFixed(2))
        return progress;
    }
    
    
    return(
        <>
        <ContentClass>
            <NavBar></NavBar>
            <TodayClass>{dayjs().locale('pt-br').format(`dddd, DD/MM`)}</TodayClass>
            {progressCalculator() === 0 ? 
            <ProgressClass>Tu nao fez nada ainda </ProgressClass>
            :
            <ProgressClass>Voce Ja fez {`${progressCalculator()}% dos habitos`}</ProgressClass>}
            
            {todayHabits.map((habit) => {
                return(
                    <TodayHabit habit={habit} todayHabits={todayHabits} setTodayHabits={setTodayHabits}></TodayHabit>
                )
            })}
            <Footer></Footer>
        </ContentClass>
        
        </>
    )
}
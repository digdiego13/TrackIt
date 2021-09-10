import { ButtonsClasses, ButtonDaysClass} from "./HabitsClasses"
export default function WeekButtons({habitsDays, setHabitsDays, day, index}) {
    let selectedStyle = false;
    habitsDays.includes(index+1) ? selectedStyle = true : selectedStyle= false;

    function addWeekDay(index) {
        let numberDay = index + 1;
        habitsDays.includes(numberDay) ? setHabitsDays(()=> habitsDays.filter((element)=> element!==numberDay)) : setHabitsDays(()=> [...habitsDays, numberDay])
    }

    return(
        <ButtonDaysClass selectedStyle={selectedStyle} onClick={()=>addWeekDay(index)}>{day}</ButtonDaysClass>
    )
}
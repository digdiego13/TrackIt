import { MyHabitsClass } from "./HabitsClasses"

export default function MyHabits({sethabitCreationDisplay}) {

    function addHabit() {
        sethabitCreationDisplay(true);
    }
    return(
        <MyHabitsClass>
            <h1>Meus habitos</h1>
            <button onClick={addHabit}>+</button>
        </MyHabitsClass>
    )
}
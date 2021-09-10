
import { SaveHabitsButtons, CreateHabitsClass, ButtonsClasses, ButtonClass } from "./HabitsClasses"
import { Input } from "../SharedStyles"

export default function CreateHabits() {

    return(
        <>
        <CreateHabitsClass>
            <Input placeholder='Nome do habito'></Input>
            <ButtonsClasses>
                <button>D</button>
                <button>D</button>
                <button>D</button>
            </ButtonsClasses>
            <SaveHabitsButtons>
                <ButtonClass color='blue' background='white' >Cancelar</ButtonClass>
                <ButtonClass color='white' background='blue'>Salvar</ButtonClass>
            </SaveHabitsButtons>
            
        </CreateHabitsClass>
        </>
    )
}
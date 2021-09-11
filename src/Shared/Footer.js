import { Container, ProgressClass } from "./FooterClasses"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import ProgressContext from "../Contexts/ProgressContext";
import { Link } from "react-router-dom";

export default function Footer () {

    const {progress} = useContext(ProgressContext);
    console.log(progress)
    return(
        <Container>
            <Link to='/habitos'><h1>Hábitos</h1></Link>
            <ProgressClass>
                <Link to='/hoje'><CircularProgressbar value={progress} text="Hoje" /></Link>
            </ProgressClass>
            <Link to='/habitos'><h1>Histórico</h1></Link>
        </Container>
    )
}
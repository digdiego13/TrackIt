import axios from 'axios';
import { useContext } from 'react';
import TokenContext from './Contexts/Token';


const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function tryLogin(login) {
    const promise = axios.post(`${URL}/auth/login`, login);
    return promise
}

function tryRegistration(myRegistration) {
    const promise = axios.post(`${URL}/auth/sign-up`, myRegistration);
    return promise
}

function tryHabitRegistration(myHabitCreation, token) {
    
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.post(`${URL}/habits`, myHabitCreation, config)
    return promise;
}


export {
    tryLogin,
    tryRegistration,
    tryHabitRegistration
}
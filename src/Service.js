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

function getHabitsList(token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.get(`${URL}/habits`, config);
    return promise

}

function deleteHabitServer (id, token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.delete(`${URL}/habits/${id}`, config)
    return promise
}


export {
    tryLogin,
    tryRegistration,
    tryHabitRegistration,
    getHabitsList,
    deleteHabitServer
}
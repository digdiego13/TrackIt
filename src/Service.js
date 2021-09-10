import axios from 'axios';

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function tryLogin(login) {
    const promise = axios.post(`${URL}/auth/login`, login);
    return promise
}

function tryRegistration(myRegistration) {
    const promise = axios.post(`${URL}/auth/sign-up`, myRegistration);
    return promise
}


export {
    tryLogin,
    tryRegistration
}
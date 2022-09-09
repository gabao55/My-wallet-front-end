import axios from 'axios';

const apiPath = 'http://localhost:5000';

function registerUser(body) {
    return axios.post(`${apiPath}/auth/sign-up`, body)
}

function login(body, config) {
    return axios.post(`${apiPath}/auth/sign-in`, body, config);
}

function createTransaction(body, config) {
    return axios.post(`${apiPath}/transactions`, body, config);
}

function getUserTransactions(config) {
    return axios.get(`${apiPath}/transactions`, config);
}

export { registerUser, login, createTransaction, getUserTransactions };
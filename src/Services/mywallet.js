import axios from 'axios';

const apiPath = 'https://gabao55-my-wallet.herokuapp.com/';

function registerUser(body) {
    return axios.post(`${apiPath}/auth/sign-up`, body)
}

function login(body) {
    return axios.post(`${apiPath}/auth/sign-in`, body);
}

function createTransaction(body, config) {
    return axios.post(`${apiPath}/transactions`, body, config);
}

function getUserTransactions(config) {
    return axios.get(`${apiPath}/transactions`, config);
}

function deleteTransaction(config) {
    return axios.delete(`${apiPath}/transactions`, config);
}

function updateTransaction(body, config) {
    return axios.put(`${apiPath}/transactions`, body, config);
}

export { registerUser, login, createTransaction, getUserTransactions, deleteTransaction, updateTransaction };
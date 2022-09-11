import { useEffect, useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { deleteTransaction, getUserTransactions } from "../../Services/mywallet";
import { ExtractWrapper, ExtractContainer, Transaction, CreateTransaction } from "./style";
import dayjs from 'dayjs';

export default function Extract({ userData }) {
    const [transactions, setTransactions] = useState([]);
    const [lastDeleted, setLastDeleted] = useState('');
    const config = {
        headers: {
            "Authorization": `Bearer ${userData.token}`
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const promise = getUserTransactions(config);

        promise
        .then(res => setTransactions([...res.data]))
        .catch(error => {
            const errorStatus = error.response.status;
            switch (errorStatus) {
                case 401:
                    alert('Erro de validação, tente novamente ou refaça o login');
                    break;
                default:
                    alert('Ocorreu um erro inesperado, tente novamente');
                    break;
            }
        });
    }, [lastDeleted]);

    return (
        <>
            <ExtractWrapper isPositive={true}>
                <div>
                    <h2>Olá, {userData.name}</h2>
                    <ion-icon name="exit-outline" onClick={() => navigate('/')}></ion-icon>
                </div>
                <Transactions transactions={transactions} config={config} setLastDeleted={setLastDeleted} />
            </ExtractWrapper>
            <CreateTransaction>
                <button onClick={() => navigate('/add-transaction', { state: "income" })}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova<br />entrada</p>
                </button>
                <button onClick={() => navigate('/add-transaction', { state: "expense" })}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova<br />saída</p>
                </button>
            </CreateTransaction>
        </>
    )
}

function Transactions({ transactions, config, setLastDeleted }) {
    const balance = transactions
    .map(transaction => transaction.type === "expense" ? -Number(transaction.value) : Number(transaction.value))
    .reduce((a, b) => a + b, 0);

    const formatedBalance = Math.abs(balance).toFixed(2).replace('.', ',');

    return (
        <ExtractContainer isPositive={balance >= 0}>
            <div className="transactions">
                {
                    transactions.length === 0 ?
                    <div className="empty">
                        <p>Não há registros de entrada ou saída</p>
                    </div> :
                    <>
                        {transactions.map((transactionData, index) => <TransactionLine config={config} key={index} transactionData={transactionData} setLastDeleted={setLastDeleted} />)}
                        <div className="balance">
                            <p>Saldo</p>
                            <strong>{formatedBalance}</strong>
                        </div>
                    </>
                }
            </div>
        </ExtractContainer>
    )
}

function TransactionLine({ transactionData, config, setLastDeleted }) {
    const formatedValue = Number(transactionData.value).toFixed(2).replace('.', ',');
    const formatedDate =  dayjs(transactionData.date).format('DD/MM');

    const navigate = useNavigate();
    
    function deleteItem() {
        config.headers._id = transactionData._id;
        const promise = deleteTransaction(config);

        promise
        .then(() => {
            alert(`Transação "${transactionData.description}" deletada com sucesso`);
            setLastDeleted(transactionData._id);
        })
        .catch(error => {
            const errorStatus = error.response.status;
            switch (errorStatus) {
                case 401:
                    alert('Erro de validação, tente novamente ou refaça o login');
                    break;
                case 404:
                    alert('Transação não encontrada');
                    break;
                default:
                    alert('Ocorreu um erro inesperado, tente novamente');
                    break;
            }
        })
    }

    return (
        <Transaction transactionType={transactionData.type}>
            <div>
                <span>{formatedDate}</span>
                <p onClick={() => navigate('/edit-transaction', { state: transactionData })}>{transactionData.description}</p>
            </div>
            <div>
                <strong>{formatedValue}</strong>
                <span onClick={deleteItem}>X</span>
            </div>
        </Transaction>
    )
}
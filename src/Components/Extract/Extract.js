import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserTransactions } from "../../Services/mywallet";
import { ExtractWrapper, ExtractContainer, Transaction, CreateTransaction } from "./style";
import dayjs from 'dayjs';

export default function Extract({ userData }) {
    const [transactions, setTransactions] = useState([]);
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
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            <ExtractWrapper isPositive={true}>
                <div>
                    <h2>Olá, {userData.name}</h2>
                    <ion-icon name="exit-outline" onClick={() => navigate('/')}></ion-icon>
                </div>
                <Transactions transactions={transactions} />
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

function Transactions({ transactions }) {
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
                        {transactions.map((transactionData, index) => <TransactionLine key={index} transactionData={transactionData} />)}
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

function TransactionLine({ transactionData }) {
    const formatedValue = Number(transactionData.value).toFixed(2).replace('.', ',');
    const formatedDate =  dayjs(transactionData.date).format('DD/MM')

    return (
        <Transaction transactionType={transactionData.type}>
            <div>
                <span>{formatedDate}</span>
                <p>{transactionData.description}</p>
            </div>
            <strong>{formatedValue}</strong>
        </Transaction>
    )
}
import styled from "styled-components";

const ExtractWrapper = styled.div`
    width: 100%;
    position: relative;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2,ion-icon {
        margin-bottom: 22px;
        font-size: 26px;
        font-weight: 700;
    }

    ion-icon {
        cursor: pointer;
    }
`;

const ExtractContainer = styled.div`
    height: 446px;
    padding: 23px 12px 50px 12px;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #FFFFFF;
    border-radius: 5px;

    .transactions {
        flex-direction: column;
        overflow-y: scroll;
    }

    .transactions::-webkit-scrollbar {
        display: none;
    }

    .transactions .empty {
        width: 180px;
        height: 446px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .transactions .empty p {
        font-size: 20px;
        color: #868686;
        text-align: center;
    }

    .balance {
        width: calc(100% - 24px);
        position: absolute;
        bottom: 15px;
        left: 15px;
    }

    .balance p {
        font-weight: 700;
        font-size: 17px;
        color: #000;
    }

    .balance strong {
        color: ${props => props.isPositive ? "#03AC00" : "#C70000"};
    }
`;

const Transaction = styled.div`
    margin-bottom: 16px;
    font-size: 16px;

    div {
        justify-content: flex-start;
    }

    span {
        color: #C6C6C6;
    }
    
    p {
        margin: 0 8px;
        color: #000000;
    }

    strong {
        color: ${props => props.transactionType === "income" ? "#03AC00" : "#C70000"};
    }
`;

const CreateTransaction = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 13px;

    button {
        width: calc((100% - 15px) / 2);
        height: 114px;
        padding: 10px;
        font-size: 17px;
        font-weight: 700;
        background-color: #A328D6;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    ion-icon {
        font-size: 22px;
    }

    p {
        text-align: left;
    }
`;

export {ExtractWrapper, ExtractContainer, Transaction, CreateTransaction};
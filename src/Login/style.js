import styled from "styled-components";

const LoginWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 24px;
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #FFFFFF;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    input {
        width: 326px;
        height: 58px;
        padding-left: 15px;
        margin-bottom: 13px;
        font-size: 20px;
        background-color: #FFFFFF;
        border-radius: 5px;
        border: none;
    }

    input::placeholder {
        color: #000000;
        font-size: 20px;
    }

    input[type="submit"] {
        font-weight: 700;
        color: #FFFFFF;
        background-color: #A328D6;
        cursor: pointer;
    }
    
    p {
        font-size: 15px;
        font-weight: 700;
        color: #FFFFFF;
        cursor: pointer;
    }
`;

export {LoginWrapper};
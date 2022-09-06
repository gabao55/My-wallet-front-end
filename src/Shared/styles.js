import styled from "styled-components";

const AppWrapper = styled.main`
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    padding: 25px 24px 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #9056bf;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${props => props.isCentered ? 0 : "auto"};

    h1 {
        margin-bottom: 24px;
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #FFFFFF;
    }

    h2 {
        width: 100%;
        margin-bottom: 40px;
        font-size: 26px;
        font-weight: 700;
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
        color: #000000;
        border-radius: 5px;
        border: none;
    }

    input::placeholder {
        color: #000000;
        font-size: 20px;
    }

    input[type="submit"] {
        font-weight: 700;
        background-color: #A328D6;
        color: #FFFFFF;
        cursor: pointer;
    }
    
    p {
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
    }
`;

export {AppWrapper, FormWrapper};
import { FormWrapper } from "../../Shared/styles";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Shared/useForm";
import { login } from "../../Services/mywallet";

export default function SignIn({ setUserData }) {
    const [form, handleForm] = useForm({
        initState: {
            email: "",
            password: "",
        }
    });
    const navigate = useNavigate();
    function sendForm(e) {
        e.preventDefault();
        
        const promise = login(form);

        promise
        .then(res => {
            setUserData(res.data);
            navigate('/extract')
        })
        .catch(error => alert('Email e/ou senha inválido(s)'));
    }

    return (
        <FormWrapper isCentered={true}>
            <h1>MyWallet</h1>
            <form onSubmit={sendForm}>
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    required
                ></input>
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    required
                ></input>
                <input
                    type="submit"
                    value="Entrar"
                    required
                ></input>
            </form>
            <p onClick={() => navigate('/sign-up')}>Primeira vez? Cadastre-se!</p>
        </FormWrapper>
    )
}
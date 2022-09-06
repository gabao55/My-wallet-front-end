import { useNavigate } from "react-router-dom";
import { LoginWrapper } from "./style";

export default function SignUp() {
    const navigate = useNavigate();

    return (
        <LoginWrapper>
            <h1>MyWallet</h1>
            <form>
                <input type="text" placeholder="Nome" required></input>
                <input type="email" placeholder="E-mail" required></input>
                <input type="password" placeholder="Senha" required></input>
                <input type="password" placeholder="Confirme a senha" required></input>
                <input type="submit" value="Cadastrar" required></input>
            </form>
            <p onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</p>
        </LoginWrapper>
    )
}
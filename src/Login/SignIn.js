import { LoginWrapper } from "./style";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();

    return (
        <LoginWrapper>
            <h1>MyWallet</h1>
            <form>
                <input type="email" placeholder="E-mail" required></input>
                <input type="password" placeholder="Senha" required></input>
                <input type="submit" value="Entrar" required></input>
            </form>
            <p onClick={() => navigate('/sign-up')}>Primeira vez? Cadastre-se!</p>
        </LoginWrapper>
    )
}
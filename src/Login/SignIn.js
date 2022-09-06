import { LoginWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "../Shared/useForm";

export default function SignIn() {
    const [form, handleForm] = useForm({
        initState: {
            email: "",
            password: "",
        }
    });
    const navigate = useNavigate();
    function sendForm(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <LoginWrapper>
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
        </LoginWrapper>
    )
}
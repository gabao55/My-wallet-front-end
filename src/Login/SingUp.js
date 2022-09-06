import { useNavigate } from "react-router-dom";
import { useForm } from "../Shared/useForm";
import { LoginWrapper } from "./style";

export default function SignUp() {
    const [form, handleForm] = useForm({
        initState: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        }
    }
    )
    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        console.log(form);
        navigate('/');
    }

    return (
        <LoginWrapper>
            <h1>MyWallet</h1>
            <form onSubmit={sendForm}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    required
                ></input>
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
                    type="password"
                    placeholder="Confirme a senha"
                    name="passwordConfirmation"
                    value={form.passwordConfirmation}
                    onChange={handleForm}
                    required
                ></input>
                <input 
                    type="submit"
                    value="Cadastrar" 
                    required
                ></input>
            </form>
            <p onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</p>
        </LoginWrapper>
    )
}
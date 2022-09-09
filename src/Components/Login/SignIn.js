import { FormWrapper } from "../../Shared/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Shared/useForm";
import { login } from "../../Services/mywallet";

export default function SignIn({ setToken }) {
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
            setToken(res.data);
            navigate('/extract')
        })
        .catch(error => console.log(error));
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
import { useLocation, useNavigate } from "react-router-dom";
import { createTransaction } from "../../Services/mywallet";
import { FormWrapper } from "../../Shared/styles";
import { useForm } from "../../Shared/useForm";

export default function TransactionForm({ userData }) {
    const {state} = useLocation();
    const transactionWord = state === "income" ? "entrada" : "saída";
    const config = {
        headers: {
            "Authorization": `Bearer ${userData.token}`
        }
    };
    const [form, handleForm] = useForm({
        initState: {
            type: state,
            value: "",
            description: "",
        }
    });

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        const promise = createTransaction(
            {
                ...form,
                date: new Date(),
            },
            config
        );

        promise
        .then(() => navigate('/extract'))
        .catch((error) => {
            const errorStatus = error.response.status;
            switch (errorStatus) {
                case 401:
                    alert('Erro de validação, tente novamente ou refaça o login');
                    break;
                case 422:
                    alert(error.response.data.join('\n'));
                    break;
                default:
                    alert('Ocorreu um erro inesperado, tente novamente');
                    break;
            }
        });
    }

    return (
        <FormWrapper isCentered={false}>
            <h2>Nova {transactionWord}</h2>
            <form onSubmit={sendForm}>
                <input
                    type="text"
                    placeholder="Valor"
                    name="value"
                    value={form.value}
                    onChange={handleForm}
                    required
                ></input>
                <input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    value={form.description}
                    onChange={handleForm}
                    required
                ></input>
                <input 
                    type="submit"
                    value={"Salvar " + transactionWord}
                ></input>
            </form>
        </FormWrapper>
    )
}
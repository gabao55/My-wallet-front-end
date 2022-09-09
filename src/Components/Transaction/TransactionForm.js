import { useLocation } from "react-router-dom";
import { FormWrapper } from "../../Shared/styles";
import { useForm } from "../../Shared/useForm";

export default function TransactionForm({ token }) {
    const {state} = useLocation();
    const transactionType = state === "income" ? "entrada" : "saída";
    const [form, handleForm] = useForm({
        initState: {
            type: state,
            value: "",
            description: "",
        }
    });

    function sendForm(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <FormWrapper isCentered={false}>
            <h2>Nova {transactionType}</h2>
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
                    value={"Salvar " + transactionType} 
                    required
                ></input>
            </form>
        </FormWrapper>
    )
}
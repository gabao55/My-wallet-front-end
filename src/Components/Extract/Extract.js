import { useNavigate } from "react-router-dom";
import { ExtractWrapper, ExtractContainer, Transaction, CreateTransaction } from "./style";

export default function Extract() {
    const navigate = useNavigate();

    return (
        <>
            <ExtractWrapper isPositive={true}>
                <div>
                    <h2>Olá, Fulano</h2>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
                <ExtractContainer isPositive={true}>
                    <div className="transactions">
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                        <Transaction isPositive={false}>
                            <div>
                                <span>30/11</span>
                                <p>Almoço</p>
                            </div>
                            <strong>19,90</strong>
                        </Transaction>
                    </div>
                    <div className="balance">
                        <p>Saldo</p>
                        <strong>2849,60</strong>
                    </div>
                </ExtractContainer>
            </ExtractWrapper>
            <CreateTransaction>
                <button onClick={() => navigate('/add-transaction', { state: "income" })}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova<br />entrada</p>
                </button>
                <button onClick={() => navigate('/add-transaction', { state: "expense" })}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova<br />saída</p>
                </button>
            </CreateTransaction>
        </>
    )
}
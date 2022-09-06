import GlobalStyle from "../Shared/globalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Components/Login/SignIn";
import { AppWrapper } from "../Shared/styles";
import SignUp from "../Components/Login/SingUp";
import Extract from "../Components/Extract/Extract";
import TransactionForm from "../Components/Transaction/TransactionForm";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/extract" element={<Extract />} />
            <Route path="/add-transaction" element={<TransactionForm />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  )
}
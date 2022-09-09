import GlobalStyle from "../Shared/globalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Components/Login/SignIn";
import { AppWrapper } from "../Shared/styles";
import SignUp from "../Components/Login/SingUp";
import Extract from "../Components/Extract/Extract";
import TransactionForm from "../Components/Transaction/TransactionForm";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState('');

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn setToken={setToken} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/extract" element={<Extract token={token} />} />
            <Route path="/add-transaction" element={<TransactionForm token={token} />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  )
}
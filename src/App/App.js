import GlobalStyle from "../Shared/globalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import SignIn from "../Components/Login/SignIn";
import { AppWrapper } from "../Shared/styles";
import SignUp from "../Components/Login/SignUp";
import Extract from "../Components/Extract/Extract";
import TransactionForm from "../Components/Transaction/TransactionForm";
import { useState } from "react";
import TransactionEdition from "../Components/Transaction/TransactionEdition";

export default function App() {
  const [userData, setUserData] = useState({});

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn setUserData={setUserData} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/extract" element={<Extract userData={userData} />} />
            <Route path="/add-transaction" element={<TransactionForm userData={userData} />} />
            <Route path="/edit-transaction" element={<TransactionEdition userData={userData} />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  )
}
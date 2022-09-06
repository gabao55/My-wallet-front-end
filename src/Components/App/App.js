import GlobalStyle from "../../Shared/globalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../../Login/SignIn";
import { AppWrapper } from "../../Shared/styles";
import SignUp from "../../Login/SingUp";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  )
}
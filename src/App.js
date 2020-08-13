import React from "react";
import CurrencyForm from "./components/currencyForm/CurrencyInputForm";
import { CurrencyProvider } from "./components/currencyForm/CurrencyContext";
import styled from "styled-components";

function App() {
  return (
    <CurrencyProvider>
      <AppContainer>
        <CurrencyForm />
      </AppContainer>
    </CurrencyProvider>
  );
}

export default App;

const AppContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

import React from "react";
import CurrencyForm from "./components/currencyForm/CurrencyInputForm";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <CurrencyForm />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

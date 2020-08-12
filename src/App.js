import React from "react";
import { CurrencyProvider } from "./components/currencyForm/CurrencyContext";
import CurrencyForm from "./components/currencyForm/CurrencyInputForm";

function App() {
  return (
    <CurrencyProvider>
      <CurrencyForm />
    </CurrencyProvider>
  );
}

export default App;

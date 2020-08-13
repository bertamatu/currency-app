import React from "react";
import CurrencyForm from "./components/currencyForm/CurrencyInputForm";
import { CurrencyProvider } from "./components/currencyForm/CurrencyContext";

function App() {
  return (
    <CurrencyProvider>
      <div>
        <CurrencyForm />
      </div>
    </CurrencyProvider>
  );
}

export default App;

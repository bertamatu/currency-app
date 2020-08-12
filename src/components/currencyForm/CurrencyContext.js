import React, { useState, createContext } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [currencyInfo, setCurrencyInfo] = useState();
  const [currencyRates, setCurrencyRates] = useState([]);
  const [selectedCurrencyRates, setSelectedCurrencyRates] = useState([]);
  const [bitcoinsAmount, setBitcoinsAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState();

  return (
    <CurrencyContext.Provider
      value={
        (loading,
        setLoading,
        currencyInfo,
        setCurrencyInfo,
        currencyRates,
        setCurrencyRates,
        selectedCurrencyRates,
        setSelectedCurrencyRates,
        bitcoinsAmount,
        setBitcoinsAmount,
        selectedCurrency,
        setSelectedCurrency)
      }
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};

import React, { useState, createContext } from "react";

export const CurrencyContext = createContext();
export const CurrencyInfo = createContext();
export const CurrencyRates = createContext();
export const CurrencyOptions = createContext();
export const SelectedCurrency = createContext();
export const BitcoinsAmount = createContext();

export const CurrencyProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [currencyInfo, setCurrencyInfo] = useState();
  const [currencyRates, setCurrencyRates] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [bitcoinsAmount, setBitcoinsAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState();

  return (
    <CurrencyContext.Provider value={[loading, setLoading]}>
      <CurrencyInfo.Provider value={[currencyInfo, setCurrencyInfo]}>
        <CurrencyRates.Provider value={[currencyRates, setCurrencyRates]}>
          <CurrencyOptions.Provider
            value={[currencyOptions, setCurrencyOptions]}
          >
            <SelectedCurrency.Provider
              value={[selectedCurrency, setSelectedCurrency]}
            >
              <BitcoinsAmount.Provider
                value={[bitcoinsAmount, setBitcoinsAmount]}
              >
                {props.children}
              </BitcoinsAmount.Provider>
            </SelectedCurrency.Provider>
          </CurrencyOptions.Provider>
        </CurrencyRates.Provider>
      </CurrencyInfo.Provider>
    </CurrencyContext.Provider>
  );
};

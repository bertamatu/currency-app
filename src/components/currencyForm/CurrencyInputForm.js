import React, { useState, useEffect } from "react";
import CurrencyExchangeResults from "./CurrencyExchangeResults";
import CurrencyDropDownMenu from "./CurrencyDropDownMenu";
import { get } from "lodash";
import styled from "styled-components";
import { FaBtc } from "react-icons/fa";

const BASE_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`;

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => ++value);
}

const CurrencyAmountInput = () => {
  const [loading, setLoading] = useState(true);
  const [currencyInfo, setCurrencyInfo] = useState();
  const [currencyRates, setCurrencyRates] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [bitcoinsAmount, setBitcoinsAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState();
  const forceUpdate = useForceUpdate();

  async function fetchData() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setCurrencyInfo(data);
    setCurrencyRates(Object.values(get(data, "bpi")));
    setCurrencyOptions(Object.values(get(data, "bpi")));
    setLoading(false);
  }

  useEffect(() => {
    try {
      fetchData();
      setInterval(fetchData, 60000);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const removeItem = (index) => {
    const removedItem = currencyRates.splice(index, 1);
    setCurrencyRates([...currencyRates], removedItem);
  };

  const handleOptionSelect = (selectedCurrency) => {
    setSelectedCurrency({ selectedCurrency });
  };

  const displaySelectedItem = () => {
    currencyRates.splice(0, 0, selectedCurrency.selectedCurrency.value);
    forceUpdate();
  };

  return (
    <>
      {loading ? (
        <Loading
          src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
          alt="Loading..."
        />
      ) : (
        <>
          <BtcIcon />
          <Form>
            {currencyInfo.chartName}
            <br />
            <BitcoinInput
              type="number"
              placeholder={bitcoinsAmount}
              onChange={(e) => setBitcoinsAmount(e.target.value)}
            />
            <CurrencyExchangeResults
              currencyInfo={currencyInfo}
              currencyRates={currencyRates}
              bitcoinsAmount={bitcoinsAmount}
              removeItem={removeItem}
            />
          </Form>
          <CurrencyDropDownMenu
            currencyOptions={currencyOptions}
            handleOptionSelect={handleOptionSelect}
            selectedCurrency={selectedCurrency}
            displaySelectedItem={displaySelectedItem}
          />
          <br />
          <h5 style={{ color: "gray" }}>
            Last currency rates update: {currencyInfo.time.updated}
          </h5>

          <br />
          <small>{currencyInfo.disclaimer}</small>
        </>
      )}
    </>
  );
};

export default CurrencyAmountInput;

const Loading = styled.img`
  border-radius: 50%;
  opacity: 0.1;
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30vh;
`;
const Form = styled.form`
  text-align: center;
  background: rgb(242, 169, 0);
  margin-top: 1rem;
  padding-top: 2rem;
  border-radius: 0 50px 0 0;
`;
const BtcIcon = styled(FaBtc)`
  font-size: 5rem;
  color: rgb(242, 169, 0);
  margin-bottom: 1rem;
`;
const BitcoinInput = styled.input`
  border: none;
  margin-top: 0.5rem;
  padding: 1rem;
  outline-color: black;
  border-radius: 15px 0 15px 0;
`;

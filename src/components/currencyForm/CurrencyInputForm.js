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
  const [selectedCurrencyRates, setSelectedCurrencyRates] = useState([]);
  const [bitcoinsAmount, setBitcoinsAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState();
  const forceUpdate = useForceUpdate();

  async function fetchData() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setCurrencyInfo(data);
    setCurrencyRates(Object.values(get(data, "bpi")));
    setSelectedCurrencyRates(Object.values(get(data, "bpi")));
    setLoading(false);
  }

  // setTimeout(fetchData, 60000);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const removeItem = (index) => {
    const deletedItem = currencyRates.splice(index, 1);
    setCurrencyRates([...currencyRates], deletedItem);
    console.log("deletedItem", deletedItem);
  };

  const handleOptionSelect = (selectedCurrency) => {
    setSelectedCurrency({ selectedCurrency });
    console.log("selectedCurrency", selectedCurrency);
  };

  const displaySelectedItem = () => {
    currencyRates.splice(0, 0, selectedCurrency.selectedCurrency.value);
    console.log("currencyRates after DISPLAY", currencyRates);
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
            <input
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
            selectedCurrencyRates={selectedCurrencyRates}
            handleOptionSelect={handleOptionSelect}
            selectedCurrency={selectedCurrency}
            displaySelectedItem={displaySelectedItem}
          />
          <br />
          <hr />
          <small>{currencyInfo.disclaimer}</small>
          <hr />
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
`;
const BtcIcon = styled(FaBtc)`
  font-size: 5rem;
  color: rgb(242, 169, 0);
`;

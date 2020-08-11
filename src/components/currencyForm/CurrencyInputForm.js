import React, { useState, useEffect } from "react";
import CurrencyExchangeResults from "./CurrencyExchangeResults";
import CurrencyDropDownMenu from "./CurrencyDropDownMenu";
import { get } from "lodash";
import styled from "styled-components";
import { FaBtc } from "react-icons/fa";

const BASE_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`;

const CurrencyAmountInput = () => {
  const [loading, setLoading] = useState(true);
  const [currencyInfo, setCurrencyInfo] = useState();
  const [currencyRates, setCurrencyRates] = useState([]);
  const [selectedCurrencyRates, setSelectedCurrencyRates] = useState([]);
  const [bitcoinsAmount, setBitcoinsAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState();

  // const [visible, setVisible] = useState(true);

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

  const deleteItem = (index) => {
    const deletedItem = currencyRates.splice(index, 1);
    setCurrencyRates([...currencyRates], deletedItem);
    console.log("deletedItem", deletedItem);
  };
  // const toggle = (e) => {
  //   e.preventDefault();
  //   setVisible(!visible);
  // };
  const handleOptionSelect = (selectedCurrency) => {
    setSelectedCurrency({ selectedCurrency });
    console.log("selectedCurrency", selectedCurrency);
  };

  const displaySelectedItem = (e) => {
    // e.preventDefault();
    // if (selectedCurrency !== undefined) {
    //   const filteredSelectedItem = selectedCurrencyRates.filter((item) => {
    //     return item.code === selectedCurrency.selectedCurrency.label;
    //   });
    // console.log("filteredSelectedItem", filteredSelectedItem);
    // setCurrencyRates([...currencyRates], filteredSelectedItem);
    currencyRates.splice(0, 0, selectedCurrency.selectedCurrency.value);
    console.log("currencyRates after DISPLAY", currencyRates);
    // }
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
            {/* <button type="submit">EXCHANGE</button> */}
            <CurrencyExchangeResults
              currencyInfo={currencyInfo}
              currencyRates={currencyRates}
              bitcoinsAmount={bitcoinsAmount}
              deleteItem={deleteItem}
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

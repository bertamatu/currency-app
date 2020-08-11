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
  const [currencyRatesArray, setCurrencyRatesArray] = useState([]);
  const [bitcoinsAmount, setBitcoinsAmount] = useState(1);

  async function fetchData() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setCurrencyInfo(data);
    setCurrencyRatesArray(Object.values(get(data, "bpi")));
    setLoading(false);
  }
  setTimeout(fetchData, 60000);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteItem = (index) => {
    const deletedItem = currencyRatesArray.splice(index, 1);
    setCurrencyRatesArray([...currencyRatesArray], deletedItem);
    console.log("deletedItem", deletedItem);
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
            <input
              type="number"
              placeholder={bitcoinsAmount}
              onChange={(e) => setBitcoinsAmount(e.target.value)}
            />
            <button type="submit">EXCHANGE</button>
            <CurrencyExchangeResults
              currencyInfo={currencyInfo}
              currencyRatesArray={currencyRatesArray}
              bitcoinsAmount={bitcoinsAmount}
              deleteItem={deleteItem}
            />
          </Form>
          <CurrencyDropDownMenu currencyRatesArray={currencyRatesArray} />
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

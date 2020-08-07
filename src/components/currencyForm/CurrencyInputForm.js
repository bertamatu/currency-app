import React, { useState, useEffect } from "react";
import CurrencyExchangeResults from "./CurrencyExchangeResults";
import { get } from "lodash";

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

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  function deleteItem(index) {
    const filteredItems = currencyRatesArray.splice(index, 1);
    setCurrencyRatesArray([...currencyRatesArray], filteredItems);
  }

  return (
    <>
      {loading ? (
        <img
          src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
          alt="Loading..."
        />
      ) : (
        <>
          <hr />
          <form>
            <h4>{currencyInfo.chartName}</h4>
            <input
              type="number"
              placeholder={bitcoinsAmount}
              onChange={(e) => setBitcoinsAmount(e.target.value)}
            />
            <button type="submit">EXCHANGE</button>
          </form>
          <hr />
          <CurrencyExchangeResults
            currencyRatesArray={currencyRatesArray}
            bitcoinsAmount={bitcoinsAmount}
            deleteItem={deleteItem}
          />
          <hr />
          {currencyInfo.disclaimer}
          <hr />
        </>
      )}
    </>
  );
};

export default CurrencyAmountInput;

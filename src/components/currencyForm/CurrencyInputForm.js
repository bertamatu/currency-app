import React, { useState, useEffect } from "react";

const CurrencyAmountInput = () => {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await response.json();
      setPriceData(data.bpi);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <img
          src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
          alt="Loading..."
        />
      ) : (
        <form>
          <input type="number" placeholder="BTC" />
          <button type="submit">EXCHANGE</button>
        </form>
      )}
    </>
  );
};

export default CurrencyAmountInput;

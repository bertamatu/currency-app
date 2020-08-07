import React from "react";
import styled from "styled-components";

const CurrencyExchangeResults = (props) => {
  const { currencyRatesArray, bitcoinsAmount } = props;

  return (
    <section>
      {currencyRatesArray.map((item, index) => (
        <CurrencyCard key={index}>
          {/* {item.rate_float} */}
          {item.code}
          {/* {item.rate} */}
          {/* {item.symbol} */}
          <br />
          EXCHANGE AMOUNT: {bitcoinsAmount * item.rate_float}
        </CurrencyCard>
      ))}
    </section>
  );
};

export default CurrencyExchangeResults;

const CurrencyCard = styled.div`
  padding: 1rem;
`;

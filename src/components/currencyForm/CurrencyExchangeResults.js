import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const CurrencyExchangeResults = (props) => {
  const { currencyRatesArray, bitcoinsAmount, deleteItem } = props;

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
          <span>
            <BinIcon onClick={() => deleteItem(index)} />
          </span>
        </CurrencyCard>
      ))}
    </section>
  );
};

export default CurrencyExchangeResults;

const CurrencyCard = styled.div`
  padding: 1rem;
`;
const BinIcon = styled(MdDelete)`
  font-size: 1.2rem;
  cursor: pointer;
`;

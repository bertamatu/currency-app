import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import getSymbolFromCurrency from "currency-symbol-map";

const CurrencyExchangeResults = (props) => {
  const { currencyRatesArray, bitcoinsAmount, deleteItem } = props;

  return (
    <CurrenciesContainer>
      {currencyRatesArray.map((item, index) => (
        <CurrencyCard key={index}>
          <b>{getSymbolFromCurrency(item.code)}</b>
          {bitcoinsAmount * item.rate_float}
          <DeleteIcon onClick={() => deleteItem(index)} />
        </CurrencyCard>
      ))}
    </CurrenciesContainer>
  );
};

export default CurrencyExchangeResults;
const CurrenciesContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CurrencyCard = styled.section`
  padding: 2rem;
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;
const DeleteIcon = styled(TiDelete)`
  color: rgba(220, 20, 60, 1);
  cursor: pointer;
  padding-left: 0.5rem;
  font-size: 1.7rem;
`;

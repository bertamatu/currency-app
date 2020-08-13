import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import StatusMessage from "../StatusMessage";

const CurrencyExchangeResults = (props) => {
  const { currencyRates, bitcoinsAmount, removeItem } = props;

  return (
    <CurrenciesContainer>
      {currencyRates.length === 0 ? (
        <StatusMessage />
      ) : (
        currencyRates.map((item, index) => (
          <CurrencyCard key={index}>
            <h4>
              {Intl.NumberFormat(item.code, {
                style: "currency",
                currency: item.code,
              }).format(bitcoinsAmount * item.rate_float)}
            </h4>
            <DeleteIcon onClick={() => removeItem(index)} />
          </CurrencyCard>
        ))
      )}
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

import React from "react";
import Select from "react-select";
import styled from "styled-components";

const CurrencyDropDownMenu = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    handleOptionSelect,
    displaySelectedItem,
  } = props;

  const currencyOptionsForSelect = currencyOptions.map((item) => {
    return {
      label: item.code,
      value: item,
    };
  });

  return (
    <DropDownContainer>
      <b>Add currency:</b>
      <SelectMenu style={{ width: "170px" }}>
        <Select
          placeholder="Select currency..."
          value={selectedCurrency}
          selected={currencyOptionsForSelect === selectedCurrency}
          options={currencyOptionsForSelect}
          onChange={handleOptionSelect}
        />
      </SelectMenu>
      <Button type="submit" onClick={displaySelectedItem}>
        Add
      </Button>
    </DropDownContainer>
  );
};

export default CurrencyDropDownMenu;

const DropDownContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background: black;
  color: rgb(242, 169, 0);
  border-radius: 0 0 0 50px;
  -webkit-box-shadow: 0px 35px 36px -9px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 0px 35px 36px -9px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 35px 36px -9px rgba(0, 0, 0, 0.37);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
const SelectMenu = styled.section`
  margin: 1rem;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.65rem;
  border-radius: 4px;
`;

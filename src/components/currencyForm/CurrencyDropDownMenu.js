import React from "react";
import Select from "react-select";

const CurrencyDropDownMenu = (props) => {
  const {
    selectedCurrencyRates,
    selectedCurrency,
    handleOptionSelect,
    displaySelectedItem,
  } = props;

  const currencyOptions = selectedCurrencyRates.map((item) => {
    return {
      label: item.code,
      value: item,
    };
  });

  return (
    <div>
      <b>Add currency:</b>
      <div style={{ width: "200px" }}>
        <Select
          placeholder="Select currency..."
          value={selectedCurrency}
          selected={currencyOptions === selectedCurrency}
          options={currencyOptions}
          onChange={handleOptionSelect}
        />
      </div>
      <button type="submit" onClick={displaySelectedItem}>
        Add
      </button>
      <hr />
    </div>
  );
};

export default CurrencyDropDownMenu;

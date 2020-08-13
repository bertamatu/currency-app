import React from "react";
import Select from "react-select";

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
    <div>
      <b>Add currency:</b>
      <div style={{ width: "200px" }}>
        <Select
          placeholder="Select currency..."
          value={selectedCurrency}
          selected={currencyOptionsForSelect === selectedCurrency}
          options={currencyOptionsForSelect}
          onChange={handleOptionSelect}
        />
      </div>
      <button type="submit" onClick={displaySelectedItem}>
        Add
      </button>
    </div>
  );
};

export default CurrencyDropDownMenu;

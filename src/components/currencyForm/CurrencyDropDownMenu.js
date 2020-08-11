import React, { useState } from "react";
import Select from "react-select";

const CurrencyDropDownMenu = (props) => {
  const { currencyRatesArray } = props;
  const [selectedCurrency, setSelectedCurrency] = useState();

  const currencyOptions = currencyRatesArray.map((item) => {
    return {
      label: item.code,
      value: item,
    };
  });

  const handleOptionSelect = (selectedCurrency) => {
    setSelectedCurrency({ selectedCurrency });
    console.log("selectedCurrency", selectedCurrency);
  };

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
      <button type="submit">Add</button>
      <hr />
    </div>
  );
};

export default CurrencyDropDownMenu;

import React, { useState } from "react";
import Select from "react-select";

const CurrencyDropDownMenu = (props) => {
  const { currencyRatesArray } = props;
  const [selectedOption, setSelectedOption] = useState();

  const currencyOptions = currencyRatesArray.map((item) => {
    return {
      label: item.code,
      value: item,
    };
  });

  const handleOptionSelect = (selectedOption) => {
    setSelectedOption({ selectedOption });
    console.log("selectedOption", selectedOption, selectedOption.value);
  };

  return (
    <div>
      <b>Add currency:</b>
      <div style={{ width: "200px" }}>
        <Select
          value={selectedOption}
          selected={currencyOptions === selectedOption}
          options={currencyOptions}
          onChange={handleOptionSelect}
        />
      </div>
      <button type="submit">Add</button>
    </div>
  );
};

export default CurrencyDropDownMenu;

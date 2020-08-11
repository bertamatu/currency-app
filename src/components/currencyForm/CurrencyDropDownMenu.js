import React from "react";
import Select from "react-select";

const CurrencyDropDownMenu = (props) => {
  const { currencyRatesArray } = props;

  const currencyOptions = currencyRatesArray.map((item, index) => {
    return {
      label: item.code,
      value: item.code,
      key: index,
    };
  });

  return (
    <div>
      <b>Add currency:</b>
      <div style={{ width: "200px" }}>
        <Select options={currencyOptions} />
      </div>
    </div>
  );
};

export default CurrencyDropDownMenu;

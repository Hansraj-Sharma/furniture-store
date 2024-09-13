import React from "react";
import styles from "./style.module.css";

const Select = ({ OptionData, label }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <br />
      <select>
        {OptionData.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

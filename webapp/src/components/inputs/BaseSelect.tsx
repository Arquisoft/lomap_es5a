import React, { useState } from "react";
import "../../public/css/components/inputs/baseSelect/BaseSelect.scss";
import type { BaseSelect as BaseSelectType } from "../../shared/shareddtypes";
import { generateUUID } from "../../utils/stringUtils";

function BaseSelect({
  id,
  label,
  name,
  options,
  showContent,
  handleChange,
  styles,
}: BaseSelectType) {
  const [selectedOption, setSelectedOption] = useState("no-opt");
  const selectId = id || generateUUID();

  return (
    <div className="base-select-container">
      <label htmlFor={selectId}>{label}</label>
      <select
        onChange={(e) => {
          setSelectedOption(e.currentTarget.value);
          handleChange(e);
        }}
        name={name}
        id={selectId}
        value={selectedOption}
        className="base-select-item"
        style={styles as React.CSSProperties}
      >
        <option value="no-opt" defaultValue={"no-opt"}>Selecciona una opción</option>
        {options.map((opt) => {
          return (
            <option key={opt.value + generateUUID()} value={opt.value}>
              {showContent ? opt.content : opt.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default BaseSelect;

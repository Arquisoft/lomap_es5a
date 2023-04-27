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
  const [selectedOption, setSelectedOption] = useState<string>("no-opt");
  const selectId = id || generateUUID();

  return (
    <div className="base-select-container">
      <label htmlFor={selectId}>{label}</label>
      <select
        onChange={(e) => {
          setSelectedOption(e.target.value);
          handleChange(e);
        }}
        name={name}
        id={selectId}
        className="base-select-item"
        style={styles as React.CSSProperties}
        defaultValue={selectedOption}
      >
        <option value="no-opt">Selecciona una opción</option>
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
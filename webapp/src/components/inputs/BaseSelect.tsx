import React from "react";
import type { BaseSelect as BaseSelectType } from "../../shared/shareddtypes";
import "../../public/css/components/inputs/baseSelect/BaseSelect.scss";

function BaseSelect({ id, label, name, options, handleChange,styles }: BaseSelectType) {
  return (
    <div className="base-select-container">
      <label htmlFor={id}>{label}</label>
      <select
        onChange={handleChange}
        name={name}
        id={id}
        className="base-select-item"
        style={styles as React.CSSProperties}
      >
        {options.map((opt) => {
          return (
            <option key={opt.value + crypto.randomUUID} value={opt.value}>
              {opt.value || opt.content}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default BaseSelect;

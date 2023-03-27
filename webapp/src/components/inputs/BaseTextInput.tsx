import React from "react";
import "../../public/css/components/inputs/BaseTextInput.scss";
import { BaseInputProps } from "../../shared/shareddtypes";

function BaseTextInput({
  label,
  name,
  value,
  onChange,
  type,
  id,
  placeholder,
  required,
}: BaseInputProps) {
  return (
    <div className="base-text-input-container">
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
        id={id || crypto.randomUUID()}
        required={required}
      />
    </div>
  );
}

export default BaseTextInput;

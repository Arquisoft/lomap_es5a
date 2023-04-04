import React from "react";
import "../../public/css/components/inputs/BaseTextInput.scss";
import { BaseInputProps } from "../../shared/shareddtypes";

function BaseTextInput({
  label,
  name,
  value,
  onChange,
  onPaste,
  type,
  id,
  placeholder,
  styles,
  required,
}: BaseInputProps) {

  const inputId = id || crypto.randomUUID();

  return (
    <div className="base-text-input-container">
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        onPaste={onPaste}
        placeholder={placeholder}
        name={name}
        value={value}
        id={inputId}
        required={required}
        style={styles as React.CSSProperties}
      />
    </div>
  );
}

export default BaseTextInput;

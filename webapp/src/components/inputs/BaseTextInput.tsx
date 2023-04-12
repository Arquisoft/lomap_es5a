import React, { useState } from "react";
import "../../public/css/components/inputs/BaseTextInput.scss";
import { BaseInputProps } from "../../shared/shareddtypes";
import BaseButton from "../buttons/BaseButton";
import crypto from 'crypto';

function BaseTextInput({
  label,
  name,
  value,
  onChange,
  onInput,
  onPaste,
  showClearButton,
  type,
  id,
  placeholder,
  styles,
  required,
  disabled
}: BaseInputProps) {
  const [showClearButtonState, setShowClearButtonState] = useState(false);

  const inputId = id || window.crypto.randomUUID();

  const handleShowClearButton = (show: boolean) => {
    setShowClearButtonState(show);
  };

  return (
    <div className="base-text-input-container" onBlur={() => handleShowClearButton(false)}>
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        onInput={onInput}
        onPaste={onPaste}
        onMouseEnter={() => handleShowClearButton(true)}
        placeholder={placeholder}
        name={name}
        value={value}
        id={inputId}
        required={required}
        disabled={disabled || false}
        style={styles as React.CSSProperties}
      />
      {showClearButton && showClearButtonState && value && (
        <BaseButton
          type="button-small-gray"
          text="Borrar"
          onClick={(e) => {
            e.preventDefault();
            onChange && onChange({
              currentTarget: {
                value: "",
              },
            } as React.ChangeEvent<HTMLInputElement>);
            handleShowClearButton(false);
          }}
        />
      )}
    </div>
  );
}

export default BaseTextInput;

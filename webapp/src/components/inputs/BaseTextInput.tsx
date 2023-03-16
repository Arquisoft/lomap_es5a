import React from "react";
import "../../public/css/components/inputs/BaseTextInput.scss";

type Props = {
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
  required?: boolean;
};

function BaseTextInput({
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
}: Props) {
  return (
    <div className="base-text-input-container">
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default BaseTextInput;

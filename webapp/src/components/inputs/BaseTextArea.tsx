import React from "react";
import { BaseTextAreaProps } from "../../shared/shareddtypes";

import "../../public/css/components/inputs/baseTextArea/BaseTextArea.scss";

function BaseTextArea({
  label,
  name,
  value,
  placeholder,
  id,
  maxLength,
  onChange,
}: BaseTextAreaProps) {

  const textAreaId = id || crypto.randomUUID();

  return (
    <div className="base-textarea-container">
      <label htmlFor={textAreaId}>{label}</label>
      <textarea
        name={name}
        id={textAreaId}
        cols={30}
        rows={7}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
      ></textarea>
    </div>
  );
}

export default BaseTextArea;

import React from "react";
import { BaseTextAreaProps } from "../../shared/shareddtypes";

import "../../public/css/components/inputs/baseTextArea/BaseTextArea.scss";

function BaseTextArea({
  label,
  name,
  value,
  placeholder,
  id,
  onChange,
}: BaseTextAreaProps) {
  return (
    <div className="base-textarea-container">
      <label htmlFor="">{label}</label>
      <textarea
        name={name}
        id={id}
        cols={30}
        rows={7}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default BaseTextArea;

import React from 'react'
import type { BaseSelect as BaseSelectType } from '../../shared/shareddtypes';
import "../../public/css/components/inputs/baseSelect/BaseSelect.scss";

function BaseSelect({id, name, options, handleChange}: BaseSelectType) {
  return (
    <select onChange={handleChange} name={name} id={id} className="base-select-item">
        {
            options.map((opt) => {
                return (
                <option key={opt.value + crypto.randomUUID} value={opt.value}>{opt.value ?? opt.content}</option>)
            })
        }
    </select>
  )
}

export default BaseSelect;

import React from "react";
import "./index.css";

export function Input({
  label,
  id,
  name,
  type,
  value,
  required,
  onChange,
  small = false,
  medium = false,
  full = false
}) {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        style={{ width: small ? "200px" : medium ? "48%" : full ? "96%" : null }}
        required={required}
      />
      <label>{label}</label>
    </div>
  );
}

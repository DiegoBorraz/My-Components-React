import React from "react";

export function Input({ label, id, name, type, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input id={id} name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
}

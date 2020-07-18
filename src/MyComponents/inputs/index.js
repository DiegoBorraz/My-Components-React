import React, { useState, useEffect } from "react";
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
  full = false,
  error = false,
  messageError = ""
}) {
  const [inputError, setError] = useState(false);

  return (
    <div>
      <input
        id={id}
        name={name}
        type={type == "number" ? "number" : "text"}
        value={value}
        onChange={(onChange, e => setError(!validation(type, e.target.value)))}
        style={{ width: small ? "200px" : medium ? "48%" : full ? "96%" : null }}
        pattern={getPattern(type)}
        required={required}
      />
      <label>{label}</label>
      <span className={inputError ? "error" : ""}>{messageError} </span>
    </div>
  );
}

function getPattern(type) {
  let pattern;
  switch (type) {
    case "text":
      pattern = "S+.*";
      break;
    case "email":
      pattern = "(?!test@test.com$)[a-z0-9._%+-]{3,}@[a-z]{3,}.[a-z]{2,}(?:.[a-z]{2,})?";
      break;
    case "number":
      //no-useless-escape
      pattern = `[0-9]+ |[0-9]+\.[0-9]+\.[^\.]?`;
      break;
    default:
      pattern = "";
      return pattern;
  }
}

function validation(type, value) {
  if (type == "email") {
    if (value == "") {
      return true;
    } else {
      var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
      if (typeof value == "string") {
        if (er.test(value)) {
          return true;
        }
      } else if (typeof value == "object") {
        if (er.test(value.value)) {
          return true;
        }
      } else {
        return false;
      }
    }
  } else if (type == "number") {
    console.log(!isNaN(parseFloat(value)) && isFinite(value));
    return !isNaN(parseFloat(value)) && isFinite(value);
  } else {
    return true;
  }
}

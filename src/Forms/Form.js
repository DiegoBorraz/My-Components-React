import React from "react";

import  FloatInput  from "../MyComponents/inputs/FloatInput";
function Form() {
  return (
    <>
      <h1>COMPONENTS CRIADOS PELO DIEGO</h1>
      <FloatInput
        id="input"
        name="input"
        type="email"
        messageError="Digite um email valido"
        label="Digite seu email:"
        required
      />
      <FloatInput
        id="input"
        name="input"
        type="number"
        messageError="Digite um número valido"
        label="Digite alguns números:"
        required
      />
      <FloatInput
        id="input"
        name="input"
        type="email"
        messageError="Digite um email valido"
        label="Digite seu email:"
        required
      />
      <FloatInput
        id="input"
        name="input"
        type="password"
        messageError="Digite seu password"
        label="Digite seu password:"
        required
      />
    </>
  );
}
export default Form;

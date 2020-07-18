import React from "react";

import { Input } from "../MyComponents/inputs";
function Form() {
  return (
    <>
      <h1>COMPONENTS CRIADOS PELO DIEGO</h1>
      <Input
        id="input"
        name="input"
        type="email"
        messageError="Digite um email valido"
        label="Digite seu email:"
        full
        required
      />
      <Input
        id="input"
        name="input"
        type="number"
        messageError="Digite um número valido"
        label="Digite alguns números:"
        full
        required
      />
      <Input
        id="input"
        name="input"
        type="email"
        messageError="Digite um email valido"
        label="Digite seu email:"
        full
        required
      />
      <Input
        id="input"
        name="input"
        type="password"
        messageError="Digite seu password"
        label="Digite seu password:"
        full
        required
      />
    </>
  );
}
export default Form;

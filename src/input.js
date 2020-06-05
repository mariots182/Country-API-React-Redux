import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  background: var(--white);
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;
  border-radius: 5px;
  /*width: 100%;*/
  /*box-sizing: border-box;*/
  flex: 1;

  i {
    margin-right: 1em;
    color: #c4c4c4;
  }

  input {
    /* width: 100%;*/
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: 0.7em;
    outline: 0;
    color: var(--black);
    background: var(--white);
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`;

/*&::-webkit-input-placeholder
 A traves de Chrome DevTools se activo en las preferencias
 el checkbox de Elements -> Show user agent shadow DOM
 con eso, cuando se inspecciona el elemento inputValue
 podemos obtener el pseudo elemento que lo componen
 y se toma el nombre para a traves de css manipular el color
*/

function Input({ ...props }) {
  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type="text" {...props} />
    </InputStyled>
  );
}

export default Input;

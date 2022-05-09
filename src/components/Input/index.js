import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// @import styles
import { InputContainer, InputVaild } from "./input.styled";

const Input = (props) => {
  const handleFocus = e => {
    e.target.classList.add("inputFocus");
  }

  const handleBlur = e => {
    if(e.target.value === "") e.target.classList.remove("inputFocus");
  }

  return (
    <>
      <InputContainer hasError={props.hasError}>
        <p>
          <input
            type={props.show ? "text" : props.type}
            name={props.name}
            value={props.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={props.onChange}
            hasError={props.error}
            style={{borderColor: props.error ? 'red' : 'rgba(0, 0, 0, 0.1)'}}
          />
          <label style={{color: props.error ? 'red' : '#585858'}}>{props.placeholder}</label>
        </p>
        {props.type === "password" && (
          <div onClick={() => props.setShow()}>
            {props.show ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </InputContainer>
      {props.type !== "password" && props.error && <InputVaild>{props.error}</InputVaild>}
      {props.type === "password" && (!props.value ? <InputVaild><p style={{color: props.error ? 'red' : '#585858', margin: 0}}>Minimum 8 characters</p></InputVaild> : props.error && <InputVaild><p style={{color: 'red', margin: 0}}>Minimum 8 characters</p></InputVaild>)}
    </>
  );
};

export default Input;

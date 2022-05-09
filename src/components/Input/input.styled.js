import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  & > p {
    position: relative;
    width: 100%;
    margin: 0;
    & > input {
      width: 100%;
      padding: 18px;
      font-size: 16px;
      margin: 10px auto;
      border: 1.5px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;    
      background-color: rgba(0, 0, 0, 0);
    } 
    & > label {
      position: absolute;
      top: 30px;
      left: 15px;
      z-index: -1;
      background-color: rgb(250, 250, 250);
      padding: 0 8px;
      transition: 220ms ease;
    }    
    & > input.inputFocus + label {
      position: absolute;
      top: 0px;
      left: 10px;
      font-size: 14px;
      z-index: 10;
      transition: 220ms ease;
    }
  }
  & > div {
    position: absolute;
    padding-right: 15px;
    cursor: pointer;
    &.hmmbnL {
      margin-bottom: 5px;
    }
    svg {
      vertical-align: middle;
    } 
  }
`;

export const InputVaild = styled.div`
  color: red;
  font-size: 13px;
  padding: 5px 0 10px;
`;

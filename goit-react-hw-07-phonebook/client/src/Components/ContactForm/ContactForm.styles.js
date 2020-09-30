import styled from "styled-components";
import transition from "styled-transition-group";

export const Form = styled.form`
  width: 500px;
  position: relative;
  width: 19.5em;
  box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.5);
  width: 300px;
  padding: 10px;
  border-radius: 2px;
`;
export const Label = styled.label``;
export const Input = styled.input`
  display: block;
  margin-top: 0.5em;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #a9a9a9;
  width: 100%;
`;
export const Button = styled.button`
  margin-top: 0.5em;
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.5);
  color: white;
  height: 30px;
  font-size: 1em;
  background-color: #2a3693;
  :hover {
    background-color: #242f7f;
  }
`;
export const Message = transition.div.attrs({
  unmountOnExit: true,
  timeout: 3500,
})`
  background: #c6180c;
  width:220px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  font-weight: 500;
  border-radius:8px;
  display:flex;
  justify-content:center;
  align-items:center;
  span{
    color:#fff;
  }

  &:enter {
    opacity: 0;
    transform: translateX(100%);
  }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms ease-in, transform 250ms ease-in;
  }
  &:exit {
    opacity: 1;
    transform: translateX(0);
  }
  &:exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 250ms ease-in .3s, transform 250ms ease-in .3s;
  }
`;

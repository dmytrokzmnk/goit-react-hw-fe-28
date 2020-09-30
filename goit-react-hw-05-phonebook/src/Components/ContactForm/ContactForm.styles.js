import styled from "styled-components";
import transition from "styled-transition-group";

export const Form = styled.form`
  width: 500px;
  position: relative;
`;
export const Label = styled.label``;
export const Input = styled.input`
  display: block;
  margin-top: 0.5em;
`;
export const Button = styled.button`
  margin-top: 0.5em;
`;
export const Message = transition.div.attrs({
  unmountOnExit: true,
  timeout: 3500,
})`
  background: red;
  width:220px;
  height: 80px;
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

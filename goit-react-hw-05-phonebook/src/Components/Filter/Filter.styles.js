import transition from "styled-transition-group";

export const InputFilter = transition.input.attrs({
  unmountOnExit: true,
  timeout: 250,
})`
  &:enter { height: 0; }
  &:enter-active {
    height: 15px;
    transition: height 250ms ease-in;
  }
  &:exit { height: 15px; }
  &:exit-active {
    height: 0;
    transition: height 250ms ease-in;
  }
`;

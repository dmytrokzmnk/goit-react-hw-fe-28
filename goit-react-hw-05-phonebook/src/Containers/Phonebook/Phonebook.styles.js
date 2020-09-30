import transition from "styled-transition-group";

export const Title = transition.h1.attrs({
  unmountOnExit: true,
  timeout: 500,
})`
color: #3645ab;

  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`;

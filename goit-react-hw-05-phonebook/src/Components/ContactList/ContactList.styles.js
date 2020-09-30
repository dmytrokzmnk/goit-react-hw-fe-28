import styled from "styled-components";
import transition from "styled-transition-group";

export const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  padding-top: 1em;
`;
export const Item = transition.li.attrs({
  unmountOnExit: true,
  timeout: 500,
})`
display: flex;
font-weight: 500;
&:enter { 
  opacity: 0;
  transform: translateX(-100%); 
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
  transform: translateX(-100%);
  transition: opacity 250ms ease-in, transform 250ms ease-in;
}
`;

import styled from "styled-components";
import transition from "styled-transition-group";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Item = transition.li.attrs({
  unmountOnExit: true,
  timeout: 500,
})`
display: flex;
align-items: center;
margin: 0;
padding: 10px;
font-weight: 500;
max-width: 300px;
box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.5);
border-radius: 2px;
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

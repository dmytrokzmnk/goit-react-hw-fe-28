import transition from "styled-transition-group";
import styled from "styled-components";

export const InputFilter = styled.input`
  border-radius: 3px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #a9a9a9;
  width: 100%;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1em;
  margin: 0;
  padding-bottom: 5px;
`;
export const Wrap = transition.div.attrs({
  unmountOnExit: true,
  timeout: 250,
})`
width: 19.5em;
box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.5);
width: 300px;
padding: 10px;
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

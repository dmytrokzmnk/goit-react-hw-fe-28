import styled from "styled-components";

export const Name = styled.span`
  margin: 0;
  width: 7em;
`;
export const Number = styled.span`
  margin: 0;
  width: 10em;
`;
export const Button = styled.button`
  height: 2.5em;
  width: 2.5em;
  border: none;
  background-color: #f2392d;
  border-radius: 4px;
  position: relative;
  padding: 0;
  cursor: pointer;
  :hover {
    background-color: #c6180c;
    transition: background-color 0.2s ease-in-out;
  }
  :after {
    content: "";
    display: block;
    height: 1.5em;
    width: 4px;
    border-radius: 50px;
    background-color: #fff;
    transform: rotate(45deg);
    position: absolute;
    top: 0.5em;
    left: 1.1em;
  }
  :before {
    content: "";
    display: block;
    height: 1.5em;
    width: 4px;
    border-radius: 50px;
    background-color: #fff;
    transform: rotate(-45deg);
    position: absolute;
    top: 0.5em;
    left: 1.1em;
  }
`;

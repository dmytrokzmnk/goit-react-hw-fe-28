import styled from "styled-components";

export const Table = styled.table`
  width: 872px;
  height: 300px;
  border-spacing: 0 0;
  border-collapse: separate;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);
`;
export const TableHead = styled.thead`
  background-color: #00bcd4;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 1.17px;
`;
export const TableRow = styled.tr`
  height: 50px;
  :nth-child(even) {
    background-color: #ecf2f3;
  }
`;
export const TableHeader = styled.th`
  width: 33.333%;
  :not(:last-child) {
    border-right: 2px solid rgb(224, 230, 231);
  }
`;

export const TableBody = styled.tbody`
  color: #5c6975;
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.45px;
  :nth-child(odd) {
    background-color: #00bcd4;
  }
`;
export const TableData = styled.td`
  text-align: center;
  :nth-child(3n-2) {
    padding-left: 14.5%;
    text-align: left;
  }
  :not(:last-child) {
    border-right: 2px solid rgb(224, 230, 231);
  }
`;

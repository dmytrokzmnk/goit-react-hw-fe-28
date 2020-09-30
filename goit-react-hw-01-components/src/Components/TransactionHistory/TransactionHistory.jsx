import React from "react";
import PropTypes from "prop-types";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableData } from "./TransactionHistory.styles";

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map((el) => (
          <TableRow key={el.id}>
            <TableData>{el.type}</TableData>
            <TableData>{el.amount}</TableData>
            <TableData>{el.currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;

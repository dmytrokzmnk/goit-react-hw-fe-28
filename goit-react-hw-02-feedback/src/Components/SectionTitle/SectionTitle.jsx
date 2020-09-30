import React from "react";
import PropTypes from "prop-types";
import { Section, Title } from "./SectionTitle.styles";

const SectionTitle = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default SectionTitle;

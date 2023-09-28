import React from "react";
import "./style/ButtonDefault.css";
import PropTypes from "prop-types";

export default function ButtonDefault({ text, style }) {
  return <button style={style} className="buttonDefault">{text}</button>;
}

ButtonDefault.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};

ButtonDefault.defaultProps = {
  text: "",
  style: {},
};

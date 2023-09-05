import React from "react";
import "./style/ButtonDefault.css"
import PropTypes from 'prop-types';

export default function ButtonDefault({ text }) {
  return (
    <button className="buttonDefault">{text}</button>
  )
}

ButtonDefault.propTypes = {
    text: PropTypes.string,
}

ButtonDefault.defaultProps = {
    text: '',
}
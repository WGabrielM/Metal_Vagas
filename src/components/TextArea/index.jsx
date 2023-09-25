import React from "react";
import "./style/TextArea.css";
import PropTypes from "prop-types";

export default function TextArea({ title, subTitle, text }) {
  return (
    <div className="textArea">
      <h1 className="textArea__title">{title}</h1>
      <h2 className="textArea__subtitle">
        {subTitle}
      </h2>
      <p className="textArea__text">
        {text}
      </p>
    </div>
  );
}

TextArea.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
};

TextArea.defaultProps = {
  title: "",
  subTitle: "",
  text: "",
};

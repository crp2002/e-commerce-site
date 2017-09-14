/* eslint-disable */
import React, { PropTypes } from 'react';

export default function A(props) {
    return (
      <a className={props.className} onClick={() => props.whenClicked(props.message)}>
        {props.children}
      </a>
    );
  }

A.propTypes = {
  className: PropTypes.string,
  whenClicked: PropTypes.func,
  message: PropTypes.string,
  children: PropTypes.string,
};

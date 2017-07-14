import React, { PropTypes } from 'react';

export default class A extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a className={this.props.styleKind}> {this.props.message} </a>
    );
  }
}

A.propTypes = {
  styleKind: PropTypes.string,
  message: PropTypes.string,
};

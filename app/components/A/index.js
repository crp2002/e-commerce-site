import React, { PropTypes } from 'react';

export default class A extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={this.props.containerStyle}>
        <a className={this.props.styleKind} href={this.props.href} onClick={this.props.toggle}>
          {this.props.message}
        </a>
        {this.props.children}
      </div>
    );
  }
}

A.propTypes = {
  styleKind: PropTypes.string,
  message: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.object,
  toggle: PropTypes.func,
  containerStyle: PropTypes.string,
};

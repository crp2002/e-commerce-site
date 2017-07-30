import React, { PropTypes } from 'react';

export default class A1 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={this.props.containerStyle}>
        <a className={this.props.styleKind} href={this.props.href}>
          {this.props.message}
        </a>
        {this.props.children}
      </div>
    );
  }
}

A1.propTypes = {
  styleKind: PropTypes.string,
  message: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.object,
  containerStyle: PropTypes.string,
};

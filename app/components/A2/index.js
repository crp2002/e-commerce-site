import React, { PropTypes } from 'react';

export default class A2 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={this.props.containerStyle}>
        <a className={this.props.styleKind} href={this.props.href} onClick={() => this.props.whenClicked(this.props.message)}>
          {this.props.message}
        </a>
        {this.props.children}
      </div>
    );
  }
}

A2.propTypes = {
  styleKind: PropTypes.string,
  message: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.object,
  whenClicked: PropTypes.func,
  containerStyle: PropTypes.string,
};

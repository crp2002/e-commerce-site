import React, { PropTypes } from 'react';
import A from '../A/index';

export default class Block extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={this.props.containerStyle} key={this.props.message}>
        <A
          className={this.props.styleKind}
          href={this.props.href}
          whenClicked={this.props.whenClicked}
          message={this.props.message}
        >
          {this.props.message}
        </A>
        {this.props.children}
      </div>
    );
  }
}

Block.propTypes = {
  styleKind: PropTypes.string,
  message: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.object,
  whenClicked: PropTypes.func,
  containerStyle: PropTypes.string,
};

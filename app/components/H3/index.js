import React, { PropTypes } from 'react';

export default class H3 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="warapper">
        <h3 className="H3" >{this.props.message}</h3>
      </div>
    );
  }
}

H3.propTypes = {
  message: PropTypes.string,
};

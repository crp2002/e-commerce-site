import React, { PropTypes } from 'react';

export default class Shirt extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="itemContainer">
        {/* <a href="/details" > */}
        <a>
          <img className={this.props.className} src={this.props.src} role="presentation" />
          <b className="price" >{`$ ${this.props.price}`}</b>
        </a>
      </div>
    );
  }
}

Shirt.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  src: PropTypes.string,
};

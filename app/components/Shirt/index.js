import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class Shirt extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="itemContainer">
        <Link to="/details" onClick={() => this.props.shirtClick(this.props.shirtID)}>
          <img className={this.props.className} src={this.props.src} role="presentation" />
          <b className="price" >{`$ ${this.props.price}`}</b>
        </Link>
      </div>
    );
  }
}

Shirt.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  src: PropTypes.string,
  shirtClick: PropTypes.func,
  shirtID: PropTypes.number,
};

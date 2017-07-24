import React from 'react';
import Cart from './Images/cart.png';
import Magnifier from './Images/magnifier.png';

export default class Bar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="bar" >
        <img src={Cart} className="cart" role="presentation" />
        <img src={Magnifier} className="magnifier" role="presentation" />
      </div>
    );
  }
}

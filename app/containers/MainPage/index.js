/*
 * MainPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavBar from './NavBar';
import ShirtsContainer from './ShirtsContainer';
import Bar from './Bar';

export default class MainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      shirtCategory: 'all',
      sleeveType: 'all',
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <Bar />
        <ShirtsContainer />
      </div>
    );
  }
}

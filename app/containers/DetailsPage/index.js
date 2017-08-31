import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import { shirtIDSelector } from './selectors';
import { tempDB } from '../MainPage/TempDB';

export class DetailsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const selectedShirt = tempDB.filter((shirt) => shirt.id === this.props.shirtID)[0];
    return (
      <div>
        <Link to="/main">
          Go Back
        </Link>
        <h1> hey, this is the details page </h1>
        <img src={selectedShirt.picture} alt="shirt" />
        add to cart
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shirtID: shirtIDSelector,
});

export default connect(mapStateToProps)(DetailsPage);

DetailsPage.propTypes = {
  shirtID: PropTypes.number,
};

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import { shirtIDSelector } from './selectors';
import { tempDB } from '../MainPage/TempDB';

export class DetailsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const selectedShirt = tempDB.filter((shirt) => shirt.id === this.props.shirtID)[0];
    const reviews = selectedShirt.reviews ? selectedShirt.reviews.map((eachReview, idx) => <p key={`reviewNumber${idx}`} >{eachReview}</p>) : <p>No reviews at this time</p>;
    return (
      <div id="details-container">
        <Link className="back" to="/main">
          Go Back
        </Link>

        <div className="col-4" id="left-container">
          <div className="col-9">
            <div id="vertical-container">
              <img src={selectedShirt.picture} alt="shirt" id="shirt-pic" />
              <b className="price" id="shirt-price" >{`$ ${selectedShirt.price}`}</b>
              <Link id="add-to-cart" >Add to cart<span className="bg"></span></Link>
            </div>
          </div>
        </div>

        <div className="col-6" id="right-container">
          <h3>Brand: {selectedShirt.brand}</h3>
          <p>Description: {selectedShirt.description}</p>
          <select id="">
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="col-9" id="bottom-container">
          Reviews:
          <br />
          {reviews}
        </div>

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

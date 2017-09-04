import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { categorySelector, sleeveSelector } from './selectors';
import { getShirtID } from '../DetailsPage/actions';
import Shirt from '../../components/Shirt/index';
import { tempDB } from './TempDB'; // A temporary database of shirts

// Container for all the displayed shirts
class ShirtsContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.shirtClick = this.shirtClick.bind(this);
  }
  shirtClick(shirtID) {
    this.props.getShirtID(shirtID);
  }
  render() {
    // the collection of shirts to be rendered
    let renderShirts;
    // Make an array of the categoies
    let categoryCollection;
    let uniqueCollection = {}; // eslint-disable-line
    tempDB.forEach((shirt) => {
      if (!(shirt.type in uniqueCollection)) {
        uniqueCollection[shirt.type] = true;
      }
      categoryCollection = Object.keys(uniqueCollection);
    });
    const sleeveTypes = {
      short: true,
      long: true,
    };

    // If the category and sleeve size are equall to all, then don't filter, otherwise filter by store state
    if (!this.props.category && !this.props.sleeve) {
      renderShirts = tempDB;
    } else if (this.props.category === 'all' && this.props.sleeve === 'all') {
      renderShirts = tempDB;
    } else if (categoryCollection.includes(this.props.category) && this.props.sleeve === 'all') {
      renderShirts = tempDB.filter((shirt) => this.props.category === shirt.type);
    } else if (categoryCollection.includes(this.props.category) && this.props.sleeve in sleeveTypes) {
      renderShirts = tempDB.filter((shirt) => (this.props.category === shirt.type && this.props.sleeve === shirt.sleeve));
    } else {
      renderShirts = (
        [<p className="notFound" key="0">No matches found. Please try a different category</p>]
      );
    }

    // render each element in a img tag
    renderShirts = renderShirts.map((shirt, i) => { // eslint-disable-line
      if (!shirt.picture) {
        return shirt;
      }
      return (
        <Shirt
          className="shirt"
          src={shirt.picture}
          key={shirt.id}
          price={shirt.price}
          shirtID={shirt.id}
          shirtClick={this.shirtClick}
        />
      );
    });
    return (
      <div className="shirt-container" >
        {renderShirts}
      </div >
    );
  }
}

// This worked, the old way
// function mapStateToProps(state) {
//   return {
//     category: state._root.entries[2][1],
//     sleeve: state._root.entries[3][1],
//   };
// }

// Trying selecetors
const mapStateToProps = createStructuredSelector({
  category: categorySelector,
  sleeve: sleeveSelector,
});

export function mapDispatchToProps(dispacth) {
  return bindActionCreators({ getShirtID }, dispacth);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShirtsContainer);

ShirtsContainer.propTypes = {
  category: PropTypes.string,
  sleeve: PropTypes.string,
  getShirtID: PropTypes.func,
};

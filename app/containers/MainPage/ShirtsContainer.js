import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { categorySelector, sleeveSelector } from './selectors';
import item1 from './Images/item1-casual-short.jpeg';
import item2 from './Images/item2-casual-short.jpeg';
import item3 from './Images/item3-casual-long.jpeg';
import item4 from './Images/item4-casual-long.jpeg';
import item5 from './Images/item5-dress-long.jpeg';
import item6 from './Images/item6-casual-long.jpeg';
import item7 from './Images/item7-casual-long.jpeg';
import item8 from './Images/item8-casual-short.jpeg';
import item9 from './Images/item9-dress-long.jpeg';
import active from './Images/active.jpeg';
// Container for all the displayed shirts
class ShirtsContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    // A temp database, ideally this could be obtain from a database by doing a query to a server
    const tempDB = [
      {
        id: 1,
        type: 'casual',
        sleeve: 'short',
        picture: item1,
      },
      {
        id: 2,
        type: 'casual',
        sleeve: 'short',
        picture: item2,
      },
      {
        id: 3,
        type: 'casual',
        sleeve: 'long',
        picture: item3,
      },
      {
        id: 4,
        type: 'casual',
        sleeve: 'long',
        picture: item4,
      },
      {
        id: 5,
        type: 'dress',
        sleeve: 'long',
        picture: item5,
      },
      {
        id: 6,
        type: 'casual',
        sleeve: 'long',
        picture: item6,
      },
      {
        id: 7,
        type: 'casual',
        sleeve: 'long',
        picture: item7,
      },
      {
        id: 8,
        type: 'casual',
        sleeve: 'short',
        picture: item8,
      },
      {
        id: 9,
        type: 'dress',
        sleeve: 'long',
        picture: item9,
      },
      {
        id: 10,
        type: 'train',
        sleeve: 'short',
        picture: active,
      },
    ];
    // the collection of shirts to be rendered
    let renderShirts;

    console.log('chekcing the props from render in the shirts container, ', this.props); // eslint-disable-line
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
        <div className="itemContainer" key={`div ${i}`}>
          <img className="shirt" src={shirt.picture} key={i} role="presentation" />
        </div>
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

export default connect(mapStateToProps)(ShirtsContainer);

ShirtsContainer.propTypes = {
  category: PropTypes.string,
  sleeve: PropTypes.string,
};

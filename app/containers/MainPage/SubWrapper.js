import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; // eslint-disable-line
import { bindActionCreators } from 'redux'; // eslint-disable-line


import { selectGlobal, makeSelectCategory, makeSelectSleeveSize } from './selectors'; // eslint-disable-line
import { filterReducer } from '../../reducers'; // eslint-disable-line
import { updateShirts } from './actions';
import A from '../../components/A/index';

// Subcategory container
class SubWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      category: 'All',
      sleevSize: 'All',
    };
    this.filterShirts = this.filterShirts.bind(this);

    // bind action creators
    this.updateShirts = this.props.updateShirts; // eslint-disable-line 
  }
  filterShirts(sleeveSize, category) {
    // this.updateShirts(sleeveSize, category);
    this.props.onUpdateShirts(sleeveSize, category);
  }
  render() {
    // a check
    console.log('get the list of props from the store', this.props) // eslint-disable-line  
    return (
      <div className="sub-wrapper" >
        <A styleKind="sub-category" message="Long Sleeve" containerStyle="category-container" whenClicked={this.filterShirts} category={this.props.category} />
        <A styleKind="sub-category" message="Short Sleeve" containerStyle="category-container" whenClicked={this.filterShirts} category={this.props.category} />
      </div>
    );
  }
}
SubWrapper.propTypes = {
  category: React.PropTypes.string,
  updateShirts: React.PropTypes.func,
  onUpdateShirts: React.PropTypes.func,
};

// this function is ok. it maps the action creator to the store and it updates the store
export function mapDispatchToProps(dispatch) {
  return {
    onUpdateShirts: (sleeveSize, category) => dispatch(updateShirts(sleeveSize, category)),
  };
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({updateShirts}, dispatch);
// }

function mapStateToProps({ filterReducer }) { // eslint-disable-line
  return {
    filterReducer, // eslint-disable-line
  };
}

// const mapStateToProps = createStructuredSelector({
//   sleeveSize: makeSelectSleeveSize,
//   storeCategory: makeSelectCategory
// });


// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(SubWrapper);

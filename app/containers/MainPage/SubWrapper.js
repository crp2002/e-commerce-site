import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; // eslint-disable-line
import { bindActionCreators } from 'redux'; // eslint-disable-line


import { selectGlobal, makeSelectCategory, makeSelectSleeveSize } from './selectors'; // eslint-disable-line
import { updateCategory, updateSleeve } from './actions';
import Block from '../../components/Block/index';

// Subcategory container
class SubWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.filterSleeve = this.filterSleeve.bind(this);
  }
  filterSleeve(sleeve) {
    this.props.updateSleeve(sleeve);
  }
  render() {
    return (
      <div className="sub-wrapper" >
        <Block styleKind="sub-category" message="Long Sleeve" containerStyle="category-container" whenClicked={this.filterSleeve} />
        <Block styleKind="sub-category" message="Short Sleeve" containerStyle="category-container" whenClicked={this.filterSleeve} />
      </div>
    );
  }
}
SubWrapper.propTypes = {
  updateSleeve: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCategory, updateSleeve }, dispatch);
}

function mapStateToProps({ category, sleeve }) { // eslint-disable-line
  return {
    category, // eslint-disable-line
    sleeve, // you will set a prop called sleeve, to the state.sleeve value (state.slvee comes as an argument)
  };
}
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SubWrapper);

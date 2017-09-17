import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // eslint-disable-line

import { updateSleeve } from './actions';
import Block from '../../components/Block/index';

// Subcategory container
export class SubWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSleeve }, dispatch);
}
// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(SubWrapper);

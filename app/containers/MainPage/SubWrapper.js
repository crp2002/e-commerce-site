import React from 'react';
import A from '../../components/A/index';

// Subcategory container
export default class SubWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
  filterShirts(size, category) {
    // this.updateShirts(size, category);
    this.setState({
      ...this.state,
      category,
      sleevSize: size,
    });
  }
  render() {
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
};

// function mapStateToProps({ filterReducer }) { // eslint-disable-line
//   return { filterReducer };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ updateShirts }, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SubWrapper);

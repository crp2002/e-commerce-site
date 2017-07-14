import React from 'react';
import A from '../../components/A/index';

// Subcategory container
export default class SubWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="sub-wrapper" >
        <A styleKind="sub-category" message="Long Sleeve" />
        <A styleKind="sub-category" message="Short Sleeve" />
      </div>
    );
  }
}

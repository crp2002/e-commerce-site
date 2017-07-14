import React from 'react';
import A from '../../components/A/index';

export default class SectionWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="section-wrapper" >
        <A styleKind="category" message="Casual" />
      </div>
    );
  }
}

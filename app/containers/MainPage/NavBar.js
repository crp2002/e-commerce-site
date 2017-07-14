import React, { PropTypes } from 'react';
import H3 from '../../components/H3/index';
import SectionWrapper from './SectionWrapper';

export default class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="sideBar">
        <H3 message="Dollar Shirt Cllub" />
        <SectionWrapper />
      </nav>
    );
  }
}

H3.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};

import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('should render a nav tag', () => {
    const renderedComponent = shallow(
      <NavBar />
    );
    expect(renderedComponent.contains(
      <nav></nav>
    ));
  });
});


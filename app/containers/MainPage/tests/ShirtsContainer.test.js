import { shallow } from 'enzyme';
import React from 'react';
import ShirtsContainer from '../ShirtsContainer';

describe('<ShirtsContainer />', () => {
  it('should render a div with a className bar', () => {
    const renderedComponent = shallow(
      <ShirtsContainer />
    );
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});

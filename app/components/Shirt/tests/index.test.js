import { shallow } from 'enzyme';
import React from 'react';
import Shirt from '../index';

describe('<Shirt />', () => {
  it('should render an img tag', () => {
    const renderedComponent = shallow(<Shirt />);
    expect(renderedComponent.find('img').length).toEqual(1);
  });
});

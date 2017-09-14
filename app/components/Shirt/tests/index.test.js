import { shallow } from 'enzyme';
import React from 'react';
import Shirt from '../index';

describe('<Shirt />', () => {
  it('should render an img tag', () => {
    const renderedComponent = shallow(<Shirt />);
    expect(renderedComponent.find('img').length).toEqual(1);
  });
  it('should render an price', () => {
    const renderedComponent = shallow(<Shirt />);
    expect(renderedComponent.find('b').length).toEqual(1);
  });
  it('should contain a Link', () => {
    const renderedComponent = shallow(<Shirt />);
    expect(renderedComponent.find('Link').length).toEqual(1);
  });
});


import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router';
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
  it('should find a Link and the onClick event handler', () => {
    const renderedComponent = shallow(<Shirt />);
    expect(renderedComponent.find(Link).dive().prop('onClick')).toBeDefined();
  });
  it('handles clicks', () => {
    const shirtClick = () => undefined;
    const spy = jest.fn(shirtClick);
    const renderedComponent = shallow(<Shirt shirtClick={spy} />);
    renderedComponent.find(Link).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});

import { shallow } from 'enzyme';
import React from 'react';
import A from '../index';

describe('<A />', () => {
  it('should render an anchor tag', () => {
    const renderedComponent = shallow(<A />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });
  it('renders its children', () => {
    const text = 'Click me!';
    const renderedComponent = shallow(<A>{ text }</A>);
    expect(renderedComponent.contains(text)).toEqual(true);
  });
  it('should have an onClick prop defined', () => {
    const test = 'test';
    const renderedComponent = shallow(<A onClick={test} />);
    expect(renderedComponent.prop('onClick')).toBeDefined();
  });
  it('should have an className prop defined', () => {
    const test = 'test';
    const renderedComponent = shallow(<A className={test} />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });
  it('handles clicks', () => {
    const whenClicked = () => undefined;
    const spy = jest.fn(whenClicked);
    const renderedComponent = shallow(<A whenClicked={spy} />);
    renderedComponent.find('a').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});

import { shallow } from 'enzyme';
import React from 'react';
import A from '../index';

const children = (<h1>Test</h1>);
const createComponent = (props = {}) => shallow(
  <A {...props}>
    {children}
  </A>
);

describe('<A />', () => {
  it('sould render an anchor tag', () => {
    const renderComponent = shallow(<A />);
    expect(renderComponent.find('a').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = createComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an a tag', () => {
    const renderedComponent = shallow(<A />);
    expect(renderedComponent.find('a').node).toBeDefined();
  });
});

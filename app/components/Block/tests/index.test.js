import { shallow } from 'enzyme';
import React from 'react';
import Block from '../index';

const children = (<h1>Test</h1>);
const createComponent = (props = {}) => shallow(
  <Block {...props}>
    {children}
  </Block>
);

describe('<Block />', () => {
  it('should have children', () => {
    const renderedComponent = createComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});

import { shallow } from 'enzyme';
import React from 'react';
import Bar from '../Bar';

describe('<Bar />', () => {
  it('should render a div with a className bar', () => {
    const renderedComponent = shallow(
      <Bar />
    );
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});

import { shallow } from 'enzyme';
import React from 'react';
import SubWrapper from '../SubWrapper';

describe('<SubWrapper />', () => {
  it('should render a div with a className sub-wrapper', () => {
    const renderedComponent = shallow(
      <SubWrapper />
    );
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});

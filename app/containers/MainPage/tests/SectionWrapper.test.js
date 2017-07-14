import { shallow } from 'enzyme';
import React from 'react';
import SectionWrapper from '../SectionWrapper';

describe('<SectionWrapper />', () => {
  it('should render a div with a className section-wrapper', () => {
    const renderedComponent = shallow(
      <SectionWrapper />
    );
    expect(renderedComponent.prop('className')).toBeDefined();
  });
});

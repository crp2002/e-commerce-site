import { shallow } from 'enzyme';
import React from 'react';
import H3 from '../index';

describe('<H3 />', () => {
  it('should render a h3 tag', () => {
    const renderedComponent = shallow(
      <H3 />
    );
    expect(renderedComponent.contains(
      <h3 className="H3" ></h3>
    )).toEqual(true);
  });
});

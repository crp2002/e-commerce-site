import { shallow } from 'enzyme';
import React from 'react';
import A2 from '../index';

describe('<A2 />', () => {
  it('sould render an anchor tag', () => {
    const renderComponent = shallow(<A2 />);
    expect(renderComponent.find('a').length).toEqual(1);
  });
});

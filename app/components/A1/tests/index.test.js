import { shallow } from 'enzyme';
import React from 'react';
import A1 from '../index';

describe('<A1 />', () => {
  it('sould render an anchor tag', () => {
    const renderComponent = shallow(<A1 />);
    expect(renderComponent.find('Link').length).toEqual(1);
  });
});

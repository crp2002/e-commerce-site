import { shallow } from 'enzyme';
import React from 'react';
import A from '../index';

describe('<A />', () => {
  it('sould render an anchor tag', () => {
    const renderComponent = shallow(<A />);
    expect(renderComponent.type()).toEqual('a');
  });
});

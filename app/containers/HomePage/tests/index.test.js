import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import People from '../people.mp4';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <video id="vid" playsInline autoPlay muted loop>
        <source src={People} type="video/mp4" />
      </video>
    )).toEqual(true);
  });
});

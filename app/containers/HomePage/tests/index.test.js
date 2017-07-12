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
      <div>
        <video id="vid" playsInline autoPlay muted loop>
          <source src={People} type="video/mp4" />
        </video>
        <div id="sqaure" >
          <h1>Dollar Shirt Club</h1>
          <p>The best shirts online</p>
          <button>SHOP</button>
        </div>
      </div>
    )).toEqual(true);
  });
});

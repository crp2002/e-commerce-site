import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';
import MainPage from '../index';

describe('<MainPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <MainPage />
    );
    expect(renderedComponent.contains(
      <NavBar />
    )).toEqual(true);
  });
});

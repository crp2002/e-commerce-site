import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';
import MainPage from '../index';
import Bar from '../Bar';
import ShirtsContainer from '../ShirtsContainer';

describe('<MainPage />', () => {
  it('should render the NavBar componet', () => {
    const renderedComponent = shallow(
      <MainPage />
    );
    expect(renderedComponent.contains(
      <NavBar />
    )).toEqual(true);
  });

  it('should render the Bar component', () => {
    const renderedComponent = shallow(
      <MainPage />
    );
    expect(renderedComponent.contains(
      <Bar />
    )).toEqual(true);
  });
  it('should render the ShirtsContainer component', () => {
    const renderedComponent = shallow(
      <MainPage />
    );
    expect(renderedComponent.contains(
      <ShirtsContainer />
    )).toEqual(true);
  });
});

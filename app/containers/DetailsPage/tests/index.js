import React from 'react';
import { shallow } from 'enzyme';
import DetailsPage from '../index';

describe('<DetailsPage />', () => {
  it('should render an image tag', () => {
    const renderedComponent = shallow(<DetailsPage />);
    expect(renderedComponent.find('img').length).toEqual(1);
  });
  it('should render an image tag', () => {
    const renderedComponent = shallow(<DetailsPage />);
    expect(renderedComponent.find('select').length).toEqual(1);
  });
});

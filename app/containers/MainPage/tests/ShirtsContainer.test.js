import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import ConnectedShirtsContainer, { ShirtsContainer, mapDispatchToProps } from '../ShirtsContainer';
import { getShirtID } from '../../DetailsPage/actions';
import configureStore from '../../../store';

describe('<ConnectedShirtsContainer />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render a div class with a className shirt-container', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <ConnectedShirtsContainer>
          <div className="shirt-container"></div>
        </ConnectedShirtsContainer>
      </Provider>
    );
    expect(renderedComponent.contains(<div className="shirt-container"></div>)).toBe(true);
  });
  it('should have a shirtClick method', () => {
    const renderedComponent = shallow(<ShirtsContainer />);
    expect(renderedComponent.instance().shirtClick).toBeDefined();
  });
  describe('mapDisptachToProps', () => {
    it('should inject getShirtID via mapDisptachToProps', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.getShirtID).toBeDefined();
    });
    it('should dispatch getShirtID when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const id = 1;
      result.getShirtID(id);
      expect(dispatch).toHaveBeenCalledWith(getShirtID(id));
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import ConnectedShirtsContainer from '../ShirtsContainer';
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
});


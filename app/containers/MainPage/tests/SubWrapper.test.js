import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import ConnectedSubWrapper from '../SubWrapper';
import configureStore from '../../../store';

describe('<ConnectedSubWrapper />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render a div tag with a className sub-wrapper', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <ConnectedSubWrapper>
          <div className="sub-wrapper"></div>
        </ConnectedSubWrapper>
      </Provider>
    );
    expect(renderedComponent.contains(<div className="sub-wrapper"></div>)).toBe(true);
  });
});

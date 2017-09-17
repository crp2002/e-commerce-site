import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import ConnectedSubWrapper, { SubWrapper, mapDispatchToProps } from '../SubWrapper';
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
  describe('mapDispatchToProps', () => {
    it('should inject updateSleeve', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.updateSleeve).toBeDefined();
    });
  });
});

describe('<SubWrapper />', () => {
  it('should have a filterSleeve method', () => {
    const renderedComponent = shallow(<SubWrapper />);
    expect(renderedComponent.instance().filterSleeve).toBeDefined();
  });
});

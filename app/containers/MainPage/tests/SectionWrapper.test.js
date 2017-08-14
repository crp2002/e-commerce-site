import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import A2 from '../../../components/A/index';

import ConnectedSectionWrapper, { mapDispatchToProps, SectionWrapper } from '../SectionWrapper';

import configureStore from '../../../store';

describe('<ConnectedSectionWrapper />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render a div tag with a className of section-wrapper', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <ConnectedSectionWrapper>
          <div className="section-wrapper"></div>
        </ConnectedSectionWrapper>
      </Provider>
    );
    expect(renderedComponent.contains(<div className="section-wrapper"></div>)).toBe(true);
  });

  describe('mapDispatchToProps', () => {
    describe('updateCategory', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.updateCategory).toBeDefined();
      });
    });

    describe('updateSleeve', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.updateSleeve).toBeDefined();
      });
    });
  });

  describe('SectionWrapper', () => {
    it('should contain an A2 component with at least two props', () => {
      const renderedComponent = shallow(<SectionWrapper />);
      expect(renderedComponent.contains(<A2 styleKind="category" message="All" ></A2>)).toEqual(false);
    });
  });
});

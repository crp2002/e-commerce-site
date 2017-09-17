import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import ConnectedSectionWrapper, { mapDispatchToProps, SectionWrapper } from '../SectionWrapper';
import Block from '../../../components/Block/index';
import { updateCategory, updateSleeve } from '../actions';

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
  it('should render at least one Block component', () => {
    const renderedComponent = shallow(<SectionWrapper />);
    expect(renderedComponent.find(Block).length).toBeGreaterThan(1);
  });

  describe('mapDispatchToProps', () => {
    describe('updateCategory', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.updateCategory).toBeDefined();
      });
      it('should dispatch updateCategory when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const tempCategory = 'casual';
        result.updateCategory(tempCategory);
        expect(dispatch).toHaveBeenCalledWith(updateCategory(tempCategory));
      });
    });

    describe('updateSleeve', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.updateSleeve).toBeDefined();
      });
      it('should dispatch updateSleeve when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const tempSleeveSize = 'short';
        result.updateSleeve(tempSleeveSize);
        expect(dispatch).toHaveBeenCalledWith(updateSleeve(tempSleeveSize));
      });
    });
  });

  describe('SectionWrapper', () => {
    it('should have a showAll method', () => {
      const renderedComponent = shallow(<SectionWrapper />);
      expect(renderedComponent.instance().showAll).toBeDefined();
    });
    it('should call updateCategory and UpdateSleeve when showAll is called', () => {
      const renderedComponent = mount(<SectionWrapper />);
      const dispatch = jest.fn();
      const tempCategory = 'dress';
      renderedComponent.instance().showAll(tempCategory);
      expect(dispatch).toHaveBeenCalledWith(updateCategory(tempCategory));
    });
    it('should have a showCasual method', () => {
      const renderedComponent = shallow(<SectionWrapper />);
      expect(renderedComponent.instance().showCasual).toBeDefined();
    });
    it('should have a showWork method', () => {
      const renderedComponent = shallow(<SectionWrapper />);
      expect(renderedComponent.instance().showWork).toBeDefined();
    });
    it('should have a showDress method', () => {
      const renderedComponent = shallow(<SectionWrapper />);
      expect(renderedComponent.instance().showDress).toBeDefined();
    });
    it('should have a showSlim method', () => {
      const renderedComponent = shallow(<SectionWrapper />);
      expect(renderedComponent.instance().showSlim).toBeDefined();
    });
    it('should have a showTrain method', () => {
      const renderedComponent = shallow(<SectionWrapper />);
      expect(renderedComponent.instance().showTrain).toBeDefined();
    });
    it('should have a showSale method', () => {
      const renderedComponent = shallow(<SectionWrapper />);
      expect(renderedComponent.instance().showSale).toBeDefined();
    });
  });
});

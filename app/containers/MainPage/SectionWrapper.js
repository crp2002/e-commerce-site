import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCategory, updateSleeve } from './actions';
import A2 from '../../components/A/index';
import SubWrapper from './SubWrapper';

// The container for the different shirt catefories
export class SectionWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showCasual: false,
      showWork: false,
      showDress: false,
      showSlim: false,
      showTrain: false,
      showSale: false,
    };
    this.showAll = this.showAll.bind(this);
    this.showCasual = this.showCasual.bind(this);
    this.showWork = this.showWork.bind(this);
    this.showDress = this.showDress.bind(this);
    this.showSlim = this.showSlim.bind(this);
    this.showTrain = this.showTrain.bind(this);
    this.showSale = this.showSale.bind(this);
  }
  showAll(category) {
    this.props.updateCategory(category);
    this.props.updateSleeve('all');
  }
  showCasual(category) {
    this.setState({
      ...this.state,
      showCasual: !this.state.showCasual,
    });
    if (!this.state.showCasual) {
      this.props.updateCategory(category);
      this.props.updateSleeve('all');
    }
  }
  showWork(category) {
    this.setState({
      ...this.state,
      showWork: !this.state.showWork,
    });
    if (!this.state.showWork) {
      this.props.updateCategory(category);
      this.props.updateSleeve('all');
    }
  }
  showDress(category) {
    this.setState({
      ...this.state,
      showDress: !this.state.showDress,
    });
    if (!this.state.showDress) {
      this.props.updateCategory(category);
      this.props.updateSleeve('all');
    }
  }
  showSlim(category) {
    this.setState({
      ...this.state,
      showSlim: !this.state.showSlim,
    });
    if (!this.state.showSlim) {
      this.props.updateCategory(category);
      this.props.updateSleeve('all');
    }
  }
  showTrain(category) {
    this.setState({
      ...this.state,
      showTrain: !this.state.showTrain,
    });
    if (!this.state.showTrain) {
      this.props.updateCategory(category);
      this.props.updateSleeve('all');
    }
  }
  showSale(category) {
    this.setState({
      ...this.state,
      showSale: !this.state.showSale,
    });
    if (!this.state.showSale) {
      this.props.updateCategory(category);
      this.props.updateSleeve('all');
    }
  }
  render() {
    return (
      <div className="section-wrapper" >
        <A2 styleKind="category" message="All" whenClicked={this.showAll}></A2>
        <A2 styleKind="category" message="Casual" whenClicked={this.showCasual}>
          { this.state.showCasual ? <SubWrapper category="Casual" /> : null }
        </A2>
        <A2 styleKind="category" message="Work" whenClicked={this.showWork}>
          { this.state.showWork ? <SubWrapper category="Work" /> : null }
        </A2>
        <A2 styleKind="category" message="Dress" whenClicked={this.showDress}>
          { this.state.showDress ? <SubWrapper category="Dress" /> : null }
        </A2>
        <A2 styleKind="category" message="Slim Fit" whenClicked={this.showSlim} >
          { this.state.showSlim ? <SubWrapper category="Slim Fit" /> : null }
        </A2>
        <A2 styleKind="category" message="Train" whenClicked={this.showTrain} >
          { this.state.showTrain ? <SubWrapper category="Train" /> : null }
        </A2>
        <A2 styleKind="category" message="Sale" whenClicked={this.showSale}>
          { this.state.showSale ? <SubWrapper category="Sale" /> : null }
        </A2>
      </div>
    );
  }
}
SectionWrapper.propTypes = {
  updateCategory: PropTypes.func,
  updateSleeve: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCategory, updateSleeve }, dispatch);
}
export default connect(null, mapDispatchToProps)(SectionWrapper);

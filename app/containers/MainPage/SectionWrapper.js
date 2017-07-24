import React from 'react';
import A from '../../components/A/index';
import SubWrapper from './SubWrapper';

// The container for the different shirt catefories
export default class SectionWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    this.showCasual = this.showCasual.bind(this);
    this.showWork = this.showWork.bind(this);
    this.showDress = this.showDress.bind(this);
    this.showSlim = this.showSlim.bind(this);
    this.showTrain = this.showTrain.bind(this);
    this.showSale = this.showSale.bind(this);
  }
  showCasual() {
    this.setState({
      ...this.state,
      showCasual: !this.state.showCasual,
    });
  }
  showWork() {
    this.setState({
      ...this.state,
      showWork: !this.state.showWork,
    });
  }
  showDress() {
    this.setState({
      ...this.state,
      showDress: !this.state.showDress,
    });
  }
  showSlim() {
    this.setState({
      ...this.state,
      showSlim: !this.state.showSlim,
    });
  }
  showTrain() {
    this.setState({
      ...this.state,
      showTrain: !this.state.showTrain,
    });
  }
  showSale() {
    this.setState({
      ...this.state,
      showSale: !this.state.showSale,
    });
  }
  render() {
    return (
      <div className="section-wrapper" >
        <A styleKind="category" message="Casual" whenClicked={this.showCasual}>
          { this.state.showCasual ? <SubWrapper category="Casual" /> : null }
        </A>
        <A styleKind="category" message="Work" whenClicked={this.showWork}>
          { this.state.showWork ? <SubWrapper category="Work" /> : null }
        </A>
        <A styleKind="category" message="Dress" whenClicked={this.showDress}>
          { this.state.showDress ? <SubWrapper category="Dress" /> : null }
        </A>
        <A styleKind="category" message="Slim Fit" whenClicked={this.showSlim} >
          { this.state.showSlim ? <SubWrapper category="Slim Fit" /> : null }
        </A>
        <A styleKind="category" message="Train" whenClicked={this.showTrain} >
          { this.state.showTrain ? <SubWrapper category="Train" /> : null }
        </A>
        <A styleKind="category" message="Sale" whenClicked={this.showSale}>
          { this.state.showSale ? <SubWrapper category="Sale" /> : null }
        </A>
      </div>
    );
  }
}

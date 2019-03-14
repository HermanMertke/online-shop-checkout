import React, { Component } from 'react';

import SubPrice from './components/Subprice';
import Savings from './components/Savings';
import FeesTaxes from './components/FeesTaxes';
import EstTotal from './components/EstTotal';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';

import './App.css';

import { connect } from 'react-redux';
import { handleChange } from './redux/actions/promoCodeActions';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 100.0,
      savings: -3.85,
      feesTaxes: 0,
      estTotal: 0,
      disablePromoButton: false
    }
  }

  componentDidMount = () => {
    this.setState(
      { feesTaxes: (this.state.total + this.state.savings) * 0.0875 },
      function() {
        this.setState({
          estTotal:
            this.state.total + this.state.savings + this.state.feesTaxes
        });
      }
    );
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState(
        { estTotal: this.state.estTotal * 0.9 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="checkout-container">
        <div className="checkout-summary">
          <SubPrice price={this.state.total.toFixed(2)}/>
          <Savings savings={this.state.savings.toFixed(2)}/>
          <FeesTaxes feesTaxes={this.state.feesTaxes.toFixed(2)}/>
          <hr/>
          <EstTotal estTotal={this.state.estTotal.toFixed(2)}/>
          <ItemDetails estTotal={this.state.estTotal.toFixed(2)}/>
          <hr />
          <PromoCode 
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {
  handleChange
})(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../redux/actions/promoCodeActions';

 class PromoCode extends Component {
  constructor(props){
      super(props);

      this.state = {
          open: false
      };
  }
  
  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    const promoCodeInput = (
        <div className="grid-container container">
          <div>
            <label>Promo code</label>
            <br />
            <input
                className="container" 
                placeholder="Enter promo code"
                value={this.props.promoCode}
                onChange={this.handleChange}
            >
            </input>
          </div>
          <div>
            <button
                disabled={this.props.isDisabled}
                onClick={this.props.giveDiscount}
            >Apply</button>
          </div>
        </div>
      );  
    return (
      <div className="container">
        <label 
            className="promo-code-title"
            onClick={() => this.setState({open: !this.state.open})}
        > 
            {this.state.open === true ? `Hide ` : `Apply `} 
            promo code
            {this.state.open === true ? ` -` : ` +`}
        </label>
        {this.state.open === true ? promoCodeInput : ''}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
  });

export default connect(mapStateToProps, { handleChange })(PromoCode);
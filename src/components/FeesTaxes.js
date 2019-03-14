import React, { Component } from 'react'

export default class FeesTaxes extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="container fees-taxes">
          <label className="fees-taxes-title">Est. taxes & fees (Based on 94085)</label>
        </div>
        <div>
          <span className="fees-taxes-value">{`$${this.props.feesTaxes}`}</span>
        </div>
      </div>
      
    )
  }
}

import React, { Component } from 'react'

export default class Savings extends Component {
  render() {
    return (
      <div className="grid-container container">
        <div className="tooltip">
          <label className="savings-title">Pickup Savings</label>
          <span className="tooltiptext"> Picking up your order in the store helps cut costs, and we pass the savings on to you.</span>
        </div>
        <div>
          <span className="savings-price">{`$${this.props.savings}`}</span>
        </div>
      </div>
    )
  }
}

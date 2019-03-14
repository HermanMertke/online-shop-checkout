import React, { Component } from 'react'

export default class Subprice extends Component {
  render() {
    return (
      <div className="container">
        <label>Subtotal</label>
        <span className="subtotal-price">{` $${this.props.price}`}</span>
      </div>
    )
  }
}

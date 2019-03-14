import React, { Component } from 'react'

export default class EstTotal extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <label className="est-total-title">Est. total </label>
          <span className="est-total-price">{`$${this.props.estTotal}`}</span>
        </div>
      </div>
    )
  }
}

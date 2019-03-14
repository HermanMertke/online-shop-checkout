import React, { Component } from 'react'

export default class ItemDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
        infoOpen: false
    }
  }
  
  render() {

    const info = (
      <div className="grid-container container">
        <div>
            <img 
                width={100}
                height={100}
                alt="thumbnail"
                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
            />
        </div>
        <div>
            <p className="item-description"> Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</p>
            <strong> {` $ ${this.props.estTotal}`}</strong> <span className="quantity">Qty: 1</span>
            <br />
            <strong className="previous-price"> {` $ ${this.props.estTotal}`}</strong>
        </div>
      </div>
    );
    return (
      <div className="container">
        <label 
            className="item-details-title"
            onClick={() => this.setState({infoOpen: !this.state.infoOpen})}
            > 
                {this.state.infoOpen === true ? `Hide ` : `See `} 
                item details
                {this.state.infoOpen === true ? ` -` : ` +`}
            </label>
        {this.state.infoOpen === true ? info : ''}
      </div>
    )
  }
}

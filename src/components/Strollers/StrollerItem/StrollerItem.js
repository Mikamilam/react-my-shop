import React, { Component } from 'react';

import css from './StrollerItem.css';
import Button from '../../../images/button.png';

class StrollerItem extends Component {
	render() {
		return (
			<div className="strollerItem">
				<img 
					src={this.props.product.picture} 
					alt="" className="product-img"
				/>
				<div className="info">
					<div className="namePrice">
						<h5>{this.props.product.title}</h5>
						<strong className="price">
							{this.props.product.price}
						</strong>
					</div>
					<img src={ Button } 
						alt="button" 
						className="button" 
						onClick={() => this.props.addToCart(this.props.product)}
					/> 
				</div>
			</div>
		)
	}
}

export default StrollerItem;
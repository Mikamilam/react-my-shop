import React, { Component } from 'react';

import './OrderListItem.css';


export class OrderListItem extends Component {
	render() {
		return(
			<div>
				{
					this.props.order.map(product => {
						return (
							<div>{product.title} - {product.price}</div>
						)
					})
				}
				<br/>
				<strong>Total Price: </strong>
				{
					this.props.order.reduce((acc, product) => {
						return acc + product.price
					},0)
				}
				<hr/>
			</div>
		)
	}
}
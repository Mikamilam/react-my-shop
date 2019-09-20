import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import ProductItem from './ProductItem/ProductItem';
import css from './Products.css';

class Products extends Component {
	render() {
		return(
			<div className="row">
				{this.props.products.map(product => {
					return (
						<div key={product.id}>
							<ProductItem product={product} addToCart = {this.props.addToCart}/>
						</div>
					)
				})}
			</div>
		)
	}
}

export default withRouter(Products);
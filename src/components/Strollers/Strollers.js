import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import StrollerItem from './StrollerItem/StrollerItem';

import css from './Strollers.css';

class Strollers extends Component {
	render() {
		return(
			<div className="row">
				{this.props.strollers.map(product => {
					return (
						<div key={product.id}>
							<StrollerItem product={product} addToCart = {this.props.addToCart}/>
						</div>
					)
				})}
			</div>
		)
	}
}

export default withRouter(Strollers);
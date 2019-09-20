import React, { Component } from 'react';

import FeaturedItem from './FeaturedItem/FeaturedItem';
import css from './Featured.css';

import { WORDS_eng } from '../../assets/WORDS_eng';
import { WORDS_rus } from '../../assets/WORDS_rus';

class Featured extends Component {
	render() {
		const { translation } = this.props;
		return(
			<div className="title">
			<h1>{ translation.featured }</h1>
				<div className="row">
					{this.props.featured.map(product => {
						return (
							<div key={product.id}>
								<FeaturedItem product={product} addToCart = {this.props.addToCart}/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Featured;
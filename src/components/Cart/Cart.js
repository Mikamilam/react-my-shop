import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { ProductItem } from '../Products/ProductItem/ProductItem';
import './Cart.css';

class Cart extends Component {
	render(){
		return(
			<div className="cart">
				{this.props.cart.length === 0 ?
					<h4>Please, choose the items before...</h4>
					: <div>
						<div className="cart-items">
							{
								this.props.cart.map(product => {
									return (
										<div className="cart-item" key={product.id}>
											<img src={product.picture} alt="" className="product-img"></img>
											<div className="info">
												<div className="namePrice">
													<h5>{product.title}</h5>
													<strong className="price">
														{product.price}
													</strong>
												</div>
												<button   
													className="button" 
													onClick={() => this.props.removeFromCart(product)}
												>
													&mdash;
												</button>
												
											</div>	
										</div>
									)
								})
							}
						</div>
						<div className="btn-cart">
							<button 
								className="btn btn-success" 
								disabled={this.props.cart.length === 0} 
								onClick={this.props.showModal}
								
							>
								To order
							</button>
						</div>
					</div>
				}
				
				
			</div>
		)
	}
}

export default withRouter(Cart);


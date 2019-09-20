import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Logo from '../../../images/logo.png';
import classes from './Header.css';
import Cart from '../../../images/Cart.png';
import Pic from '../../../images/Pic.png';

import { WORDS_eng } from '../../../assets/WORDS_eng';
import { WORDS_rus } from '../../../assets/WORDS_rus';




class Header extends Component {

	handleSelectChange = (event) => {
    this.props.translateState(event.target.value);
    event.preventDefault();
  }
	render() {
		const { translation } = this.props;
		return (
			<header>
				<div className="account">
					<div className="selects">
						<div className="language">
							<p> { translation.Language }:  {this.props.value}</p>
							<select
							onChange={this.handleSelectChange}
							>
								<option value='eng'>English</option>
								<option value='rus'>Русский</option>
							</select>
						</div>
						<div className="currency">
							<p> { translation.Currency }: {this.props.value}</p>
							<select
							value={this.props.value}
							onChange={this.props.handleSelectChange}
							>
								<option>USD</option>
								<option>KZT</option>
							</select>
						</div>
					</div>
					<ul>
						<li>{ translation.Account }</li>
						<li>{ translation.Wishlist }</li>
						<li>{ translation.Checkout }</li>
						<li>{ translation.Login }</li>
						<li>{ translation.SignUp }</li>
					</ul>
				</div>
				<div className="logo">
					<img className="LogoImg"src={Logo} alt="logo"/>
					<ul>
						<li onClick={() => this.props.history.push("/")}>{ translation.home }</li>
						<li onClick={() => this.props.history.push("/hipseats")}>{ translation.hipseats }</li>
						<li onClick={() => this.props.history.push("/strollers")}>{ translation.strollers }</li>
						<li>{ translation.other }</li>
						<li>{ translation.purchase }</li>
					</ul>
					<form>
					   <input type="search" name="search" placeholder="Search.."/> 
					   <input type="submit" value="Найти"/>
					 </form>
					<div className="btnCart">
						<img src={Pic} alt="pic"/>
						<img 
							src={Cart} 
							alt="cart"
							onClick={() => this.props.history.push("/cart")}
						/>
						<p onClick={() => this.props.history.push("/cart")}>{ translation.Cart } ({this.props.cart.length})</p>
					</div>
					
				</div>
			</header>
		);
	}
};

export default withRouter(Header);


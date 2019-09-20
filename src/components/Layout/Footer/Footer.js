import React from 'react';

import css from './Footer.css';

import Car from '../../../images/car.png';
import Telephone from '../../../images/telephone.png';
import Google from '../../../images/google.png';
import Linkedin from '../../../images/linkedin.png';
import Wifi from '../../../images/wifi.png';
import Facebook from '../../../images/facebook.png';

const Footer = (props) => {
	return (
			<footer>
				<div className="delivery">
					<div>
						<img style={{ padding: '16px 13px' }} src={ Car } alt="Car" className="car"/>
						<span className="shippingText">free shipping on orders over 100$</span>
					</div>
					<div>
						<img src={ Telephone } alt="Telephone" className="telephone"/>
						<span className="call-us-Text">call us! +7(775)824-58-42</span>
					</div>
				</div>
				<div className="contacts">
					<div>
						<span>facebook</span>
						<ul>
							<li>hgh fgfdgfdgfdfgfd</li>
							<li>fgh hgfhgdjh fghhgf2</li>
							<li>fgdfgh hgfhgfjh rjhfgh</li>
						</ul>
					</div>
					<div>
						<span>from twitter</span>
						<ul>
							<li>hgh fgfdgfdgfdfgfd</li>
							<li>fgh hgfhgdjh fghhgf2</li>
							<li>fgdfgh hgfhgfjh rjhfgh</li>
						</ul>
					</div>
					<div>
						<span>information</span>
						<ul>
							<li>hgh fgfdgfdgfdfgfd mnnb,n xbnn</li>
							<li>fgh hgfhgdjh fghhgf2 ghg ghstjtyk ujkyuk</li>
							<li>fgdfgh hgfhgfjh rjhfgh yjukjyuj ryhtyheyrh tyhrty</li>
						</ul>
					</div>
					<div>
						<span>contact us</span>
						<ul>
							<li>Almaty,Kazakhstan</li>
							<li>+7(775)824-58-42</li>
							<li>babycomfort@mail.ru</li>
						</ul>
						<hr/>
						<img src={ Google } alt="google" className="google"/>
						<img src={ Linkedin } alt="linkedin" className="linkedin"/>
						<img src={ Wifi } alt="wifi" className="wifi"/>
						<img src={ Facebook } alt="facebook" className="facebook"/>
					</div>
				</div>
				<div className="terms">
					<span>© Copyright 2019 Css Author, All Rights Reserved.	</span>
					<div>
						<span>About us</span>
						<span>Delivery & Returns</span>
						<span>Terms & Conditions</span>
						<span>Contact us</span>
					</div>
				</div>
			</footer>
	);
};

export default Footer;
import React from 'react';


import Header from './Header/Header';
import Footer from './Footer/Footer';


const Layout = (props) => {
	return (
		<div>
			<Header cart={props.cart} translation={props.translation} translateState={props.translateState}/>
			{props.children}
			<Footer/>
		</div>
	);
};


export default Layout;
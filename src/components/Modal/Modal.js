import React, { Component } from 'react';

import './Modal.css';
import Backdrop from './Backdrop/Backdrop';
import { OrderListItem } from '../Order/OrderListItem/OrderListItem';



class Modal extends Component {
	render() {
		return (
			<div className="modal" style={{ display: this.props.display }}>
				<div className="modal-window">
					{this.props.orders.map(order => {
					return (
						<div>
							<OrderListItem order={order}/>
						</div>
					)
				})}
				<p className="btn">Оплатить</p>
				</div>
				<Backdrop showModal={this.props.showModal}/>
			</div>
		)
	}
};

export default Modal;


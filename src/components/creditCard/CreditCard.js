import React from 'react';
import './CreditCard.css';

export default function CreditCard(props){
	const cardIcon = props.type === 'Visa' ? 'visa.png' : 'master-card.svg';
	const month = props.expirationMonth === props.expirationMonth < 10 ? `0${props.expirationMonth}` : props.expirationMonth;
	const year = props.expirationYear - 2000;
	let cardNumber = props.number.replace(/\d(?=\d{4})/g, "*");

	console.log(cardNumber);

	return(
		<div>
			<div className="oneCard"
			style={{
          backgroundColor: `${props.bgColor}`,
          color: 'white',
          width: 300,
          borderRadius: 15
        }}
			>
				<div>
					<img src={`img/${cardIcon}`} alt="" style={{width: 50}} className="cardImg"/>
				</div>
				<p>{cardNumber}</p>
				<div>
					<div>
						<p>Expires {month}/{year}</p>
						<p>{props.bank}</p>
						<p>{props.owner}</p>
					</div>
				</div>
			</div>
		</div>
	);
} 
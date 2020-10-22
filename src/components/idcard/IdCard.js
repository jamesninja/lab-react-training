import React from 'react';
import './IdCard.css';

export default function IdCard(props){
	return (
		<div className="IdCard">
			<div>
				<img src={props.picture} alt="" />
			</div>
			<div>
				<div>First name: {props.firstName}</div>
				<div>
					Height: {props.height}
				</div>
				<div>
					Birth: {props.birth}
				</div>
			</div>
		</div>
	);
}
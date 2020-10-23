import React from 'react';

export default function Random(props) {
	return (
			<div>
				<div>
					Random Value between {props.min} and {props.max} => { Math.floor(Math.random() * (props.max - props.min)) + props.min}
				</div>
			</div>
	)
} 
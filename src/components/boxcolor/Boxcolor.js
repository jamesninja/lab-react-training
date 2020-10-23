import React from 'react';

export default function BoxColor(props){
	const backgroundStyle = {
		backgroundColor: `rgba(${props.r}, ${props.g}, ${props.b})`,
	};
	return(
		<div style={backgroundStyle}>
			<div>
				<p>
					rgb({props.r}, {props.g},{props.b})
				</p>
			</div>
		</div>
	);
} 

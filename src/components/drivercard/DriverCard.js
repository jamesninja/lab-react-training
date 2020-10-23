import React from 'react'

export default function DriverCard(props) {
	const BgCol = {
		backgroundColor: "blue"
	}
	return (
		<div style={BgCol} >
			<div>{props.name}</div>
			<div>{props.rating}</div>
			<img src={props.img} alt="" style={{width:300}}/>
			<div>{props.car.model}{props.car.licensePlate}</div>
		</div>
	)
}
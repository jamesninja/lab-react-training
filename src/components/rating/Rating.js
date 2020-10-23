import React from 'react'
import FullStar from './FullStar.js'
import EmptyStar from './EmptyStar.js'

export default function Rating(props) {
	return (
		<div>
			<FullStar /> 
			<EmptyStar />
			<img src="img/dice1.png" alt="" style={{width:100}}/>
		</div>
	)
} 
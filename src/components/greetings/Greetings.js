import React from 'react';

export default function Greetings (props){
	let thanksMessage;
	if(props.lang === 'de'){
		thanksMessage = 'Danke'
	} else if(props.lang === 'fr'){
		thanksMessage = 'Merci'
	} else if(props.lang === 'es'){
		thanksMessage = 'Gracias'
	}else if(props.lang === 'en'){
		thanksMessage = 'Thanks'
	}
	return (
		<div className="greet">
			<p>{thanksMessage} {props.children}</p>
		</div>
	)
}
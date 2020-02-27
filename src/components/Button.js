import React from 'react';

const Button = (props) => {

	const { type = 'button',
			url = '',
			children
	} = props;

	const isAnchor = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'));

	const renderAnchor = () =>
		<a href={url} role="button">{children}</a>

	const renderButton = () =>
		<button {...{type}}>{children}</button>

	return (
		isAnchor ? renderAnchor() : renderButton()
	)
}

export default Button;
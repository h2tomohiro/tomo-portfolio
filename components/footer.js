import React from 'react';

export const Footer = ({children}) => {
	const footer = () => (
		<div class="text-center p-3">
			© 2020 Copyright: I love Baseball MANGA!
		</div>
	);
	return <React.Fragment> {footer()}
		<div className="container pt-5 pb-5">{children}</div>
	</React.Fragment>
}
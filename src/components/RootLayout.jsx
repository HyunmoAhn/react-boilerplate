import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.element.isRequired,
};

function RootLayout({ children }) {
	return (
		<div className="RootLayout">
			{children}
		</div>
	)
}

RootLayout.propTypes = propTypes;

export default RootLayout;
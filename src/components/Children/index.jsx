import React from 'react';
import workImage from 'assets/image/work-image.jpg';
import './Children.scss';

function Children() {
	return(
		<div>
			Children
			<img src={workImage} alt="work-image" />
		</div>
	);
}

export default Children;
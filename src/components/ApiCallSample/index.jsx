import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	data: PropTypes.array,
	onFetchApiCall: PropTypes.func,
};

const defaultProps = {
	data: [],
	onFetchApiCall() {},
};

class ApiCallSample extends React.Component {
	render() {
		const { data, onFetchApiCall } = this.props;

		return (
			<div>
				<button
					type="button"
					onClick={onFetchApiCall}
				>
					ApiCall!
				</button>
				{data.map((v, index) => <div key={index}>{v}</div>)}
			</div>

		);
	}
}

ApiCallSample.propTypes = propTypes;
ApiCallSample.defaultProps = defaultProps;

export default ApiCallSample;
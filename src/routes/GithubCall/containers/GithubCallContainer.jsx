import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { githubFetch } from 'store/githubCall/actions';

const propTypes = {
	onSubmit: PropTypes.func,
};

const defaultProps = {
	onSubmit() {},
};

class GithubCallContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		};
		this.handleUserNameChange = this.handleUserNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUserNameChange(e) {
		this.setState({ userName: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.userName);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.userName} onChange={this.handleUserNameChange} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

GithubCallContainer.propTypes = propTypes;
GithubCallContainer.defaultProps = defaultProps;

const mapDispatchToProps = {
	onSubmit: githubFetch,
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GithubCallContainer);
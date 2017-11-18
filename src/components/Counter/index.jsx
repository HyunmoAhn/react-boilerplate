import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement() {
		this.setState({ value: this.state.value + 1 });
	}

	handleDecrement() {
		this.setState({ value: this.state.value - 1 });
	}

	render() {
		return (
			<div>
				{this.state.value}
				<input type="button" value="increment" onClick={this.handleIncrement} />
				<input type="button" value="decrement" onClick={this.handleDecrement} />
				{this.props.children}
			</div>
		)
	}
};

export default Counter;
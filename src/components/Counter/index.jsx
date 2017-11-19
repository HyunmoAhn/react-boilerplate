import React from 'react';
import './Counter.scss';

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
			<div className="Counter">
				<span className="Counter__value">
					{this.state.value}
				</span>
				<input className="Counter__btn" type="button" value="increment" onClick={this.handleIncrement} />
				<input className="Counter__btn" type="button" value="decrement" onClick={this.handleDecrement} />
				{this.props.children}
			</div>
		)
	}
};

export default Counter;
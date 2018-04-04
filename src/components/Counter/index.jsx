import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

const propTypes = {
  children: PropTypes.element,
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

const defaultProps = {
  children: null,
  value: 0,
  onIncrement() {},
  onDecrement() {},
};

function Counter({
  children,
  value,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="Counter">
      <span className="Counter__value">
        {value}
      </span>
      <input className="Counter__btn" type="button" value="increment" onClick={onIncrement} />
      <input className="Counter__btn" type="button" value="decrement" onClick={onDecrement} />
      {children}
    </div>
  );
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;

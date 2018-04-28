import React from 'react';
import PropTypes from 'prop-types';
import * as MODAL from 'constants/MODAL_TYPE';
import './Counter.scss';

const propTypes = {
  children: PropTypes.element,
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onModalOpen: PropTypes.func,
};

const defaultProps = {
  children: null,
  value: 0,
  onIncrement() {},
  onDecrement() {},
  onModalOpen() {},
};

function Counter({
  children,
  value,
  onIncrement,
  onDecrement,
  onModalOpen,
}) {
  return (
    <div className="Counter">
      <span className="Counter__value">
        {value}
      </span>
      <input className="Counter__btn" type="button" value="increment" onClick={onIncrement} />
      <input className="Counter__btn" type="button" value="decrement" onClick={onDecrement} />
      <input
        className="Counter__btn"
        type="button"
        value="Open ALERT Modal"
        onClick={() => onModalOpen(MODAL.ALERT, {
          title: 'ALERT',
          content: 'This is ALERT MODAL',
        })}
      />      <input
        className="Counter__btn"
        type="button"
        value="Open CONFIRM Modal"
        onClick={() => onModalOpen(MODAL.CONFIRM, {
          title: 'CONFIRM',
          content: 'This is CONFIRM modal',
        })}
      />
      {children}
    </div>
  );
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;

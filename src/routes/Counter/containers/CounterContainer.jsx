import { connect } from 'react-redux';
import Counter from 'components/Counter';
import {
  counterIncrement,
  counterDecrement,
} from 'store/counter/actions';
import { valueSelector } from 'store/counter/selectors';

const mapStateToProps = state => ({
  value: valueSelector(state),
});

const mapDispatchToProps = {
  onIncrement: counterIncrement,
  onDecrement: counterDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

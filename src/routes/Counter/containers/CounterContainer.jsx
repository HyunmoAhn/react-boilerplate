import { connect } from 'react-redux';
import Counter from 'components/Counter';
import {
  counterIncrement,
  counterDecrement,
} from 'store/counter/actions';
import {
  modalClose,
  modalOpen,
} from 'store/modal/actions';
import { valueSelector } from 'store/counter/selectors';

const mapStateToProps = state => ({
  value: valueSelector(state),
});

const mapDispatchToProps = {
  onIncrement: counterIncrement,
  onDecrement: counterDecrement,
  onModalClose: modalClose,
  onModalOpen: modalOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

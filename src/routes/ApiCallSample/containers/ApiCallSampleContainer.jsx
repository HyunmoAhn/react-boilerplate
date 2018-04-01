import { connect } from 'react-redux';
import ApiCallSample from 'components/ApiCallSample';
import * as selectors from 'store/apiCall/selectors';
import * as actions from 'store/apiCall/actions';

const mapStateToProps = state => ({
  data: selectors.getDataSelector(state),
});

const mapDispatchToProps = {
  onFetchApiCall: actions.apiCallSample,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiCallSample);

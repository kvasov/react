import productPage from './index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  product: state.product.entries,
  isFetching: state.product.isFetching,
  error: state.product.error
});

export default connect(mapStateToProps)(productPage);

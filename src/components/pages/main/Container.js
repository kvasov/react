import mainPage from './index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  products: state.catalog.entries,
  isFetching: state.catalog.isFetching,
  error: state.catalog.error
});

export default connect(mapStateToProps)(mainPage);

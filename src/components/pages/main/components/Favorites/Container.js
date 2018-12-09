import favs from './index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  products: state.favorites.entries,
  isFetching: state.favorites.isFetching,
  error: state.favorites.error
});

export default connect(mapStateToProps)(favs);

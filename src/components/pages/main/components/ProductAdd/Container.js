import addProduct from './index';
import { connect } from 'react-redux';

import * as types from 'constants/actionTypes/CartActionTypes';

const mapDispatchToProps = dispatch => ({
  onAddProducts: product =>
    dispatch({
      type: types.ADD_PRODUCT,
      product
    })
});

const mapStateToProps = state => ({
  products: state.cart.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addProduct);

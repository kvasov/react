import CartBtn from './index';
import { connect } from 'react-redux';

import * as types from '~/constants/actionTypes/CartActionTypes';

const mapDispatchToProps = dispatch => ({
  onMount: () =>
    dispatch({
      type: types.RESTORE_FROM_LS
    }),

  onAddProducts: products =>
    dispatch({
      type: types.ADD_PRODUCT,
      products
    })
});

const mapStateToProps = state => ({
  products: state.cart.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartBtn);

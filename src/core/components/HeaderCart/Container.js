import cartBtn from './index';
import { connect } from 'react-redux';

import * as types from '~/constants/actionTypes/CartActionTypes';

const mapDispatchToProps = dispatch => ({
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
)(cartBtn);

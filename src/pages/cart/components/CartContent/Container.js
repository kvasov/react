import cartContent from './index';
import { connect } from 'react-redux';

import * as types from '~/constants/actionTypes/CartActionTypes';

const mapDispatchToProps = dispatch => ({
  onRemoveProduct: products =>
    dispatch({
      type: types.REMOVE_PRODUCT,
      products
    })
});

const mapStateToProps = state => ({
  products: state.cart.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cartContent);

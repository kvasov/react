import cartContent from './index';
import { connect } from 'react-redux';

import * as types from '~/constants/actionTypes/CartActionTypes';

const mapDispatchToProps = dispatch => ({
  onRemoveProduct: product =>
    dispatch({
      type: types.REMOVE_PRODUCT,
      product
    })
});

const mapStateToProps = state => ({
  products: state.cart.products
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cartContent);

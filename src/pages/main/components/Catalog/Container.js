import mainPage from './index';
import { connect } from 'react-redux';

import * as types from '~/constants/actionTypes/CatalogActionTypes';

const mapDispatchToProps = dispatch => ({
  requestProducts: () => {
    dispatch({
      type: types.FETCH_PRODUCTS_REQUEST
    });
  },

  recieveProducts: response =>
    dispatch({
      type: types.FETCH_PRODUCTS_SUCCESS,
      response
    }),

  errorProducts: () => {
    dispatch({
      type: types.FETCH_PRODUCTS_FAILURE
    });
  }
});

const mapStateToProps = state => ({});

export default connect(
  null,
  mapDispatchToProps
)(mainPage);

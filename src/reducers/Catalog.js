import { assign } from 'lodash';

import * as types from '../constants/actionTypes/CatalogActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_PRODUCTS_FAILURE:
      return assign({}, initialState, { error: true });
    case types.FETCH_PRODUCTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    default:
      return state;
  }
}

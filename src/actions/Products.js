import * as types from '../constants/actionTypes/CatalogActionTypes';

import { API_CALL } from '../middleware/API';

export function fetchProducts() {
  return {
    [API_CALL]: {
      data: {
        content_type: 'product'
      },
      types: [
        types.FETCH_PRODUCTS_REQUEST,
        types.FETCH_PRODUCTS_SUCCESS,
        types.FETCH_PRODUCTS_FAILURE
      ]
    }
  };
}

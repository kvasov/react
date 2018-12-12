import * as types from '../constants/actionTypes/ProductActionTypes';

import client from '~/helpers/contentful';

const requestProduct = id => ({
  type: types.FETCH_PRODUCT_REQUEST,
  id
});

const recieveProduct = response => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  response
});

const errorProduct = () => ({
  type: types.FETCH_PRODUCT_FAILURE
});

export function fetchProduct(id) {
  return dispatch => {
    dispatch(requestProduct(id));
    return client
      .getEntries({
        content_type: 'product',
        'fields.id': id
      })
      .then(response => {
        dispatch(recieveProduct(response.items[0].fields));
      })
      .catch(error => {
        dispatch(errorProduct());
      });
  };
}

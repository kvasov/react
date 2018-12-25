import { loadState, saveState } from 'helpers/localStorage';

export default store => next => action => {
  if (action.type == 'RESTORE_FROM_LS') {
    const cartData = loadState('cart');
    action.products = cartData;
    next(action);
  }

  if (['ADD_PRODUCT', 'REMOVE_PRODUCT', 'CLEAR_CART'].indexOf(action.type) > -1) {
    next(action);
    saveState('cart', store.getState().cart.products);
  } else {
    return next(action);
  }
};

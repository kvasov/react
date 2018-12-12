import { saveState } from 'helpers/localStorage';

export default store => next => action => {
  if (['ADD_PRODUCT', 'REMOVE_PRODUCT'].indexOf(action.type) > -1) {
    next(action);
    saveState('cart', store.getState().cart.products);
  } else {
    return next(action);
  }
};

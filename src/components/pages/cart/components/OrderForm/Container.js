import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';
import axios from 'axios';
import form from './index';

import * as types from '~/constants/actionTypes/CartActionTypes';

const onSubmit = (vals, dispatch) => {
  dispatch({
    type: types.CLEAR_CART
  });
  console.log(vals);
};

// [TODO] Не понял как настроить CORS. В реакте же ничего не нужно настраивать? только сервер?
// с расширением для хрома работает, хотелось бы без него

// const submit = values =>
//   axios.post('http://kvasov.pro/back.php', { values }).then(res => {
//     if (res.data.status == 0) {
//       const keys = Object.keys(res.data);

//       keys.forEach((val, index) => {
//         if (val !== 'status') {
//           throw new SubmissionError({ [val]: res.data[val] });
//         }
//       });
//     }
//   });

const mapStateToProps = state => ({
  initialValues: {
    cart: state.cart.products
  }
});

export default connect(
  mapStateToProps,
  null
)(
  reduxForm({ form: 'formOrder', onSubmit: (values, dispatch) => onSubmit(values, dispatch) })(form)
);

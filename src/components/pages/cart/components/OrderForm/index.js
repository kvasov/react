import React from 'react';
import { Field } from 'redux-form';

import { required, minLength3, validEmail } from 'helpers/form/validate';
import { ruPhone } from 'helpers/form/normalize';

import renderField from 'helpers/form/renderField';

import './style.scss';

class OrderForm extends React.Component {
  state = {};

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props;

    return (
      <React.Fragment>
        <form className="order-from" onSubmit={handleSubmit}>
          <Field
            label="ФИО"
            component={renderField}
            name="fullName"
            validate={minLength3}
            className="input-text"
          />
          <Field
            label="email"
            component={renderField}
            name="email"
            className="input-text"
            validate={[required, validEmail]}
          />
          <Field
            label="Телефон"
            component={renderField}
            name="phone"
            className="input-text"
            normalize={ruPhone}
          />
          <label>
            <Field name="sex" component="input" type="radio" value="male" /> Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" /> Female
          </label>

          <input type="submit" />
          {!pristine && !submitting && <button onClick={reset}>Очистить</button>}
        </form>
      </React.Fragment>
    );
  }
}

export default OrderForm;

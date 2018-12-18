import React from 'react';
import classNames from 'classnames';
import { set, assign } from 'lodash/object';

import './style.scss';

class ContactFrom extends React.Component {
  state = {
    form: {
      values: {
        name: '',
        email: '',
        message: ''
      },
      errors: {}
    }
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify(this.state.form.values));
  };

  clearError(fieldName) {
    this.setState(set(assign({}, this.state), 'form.errors.name', false));
  }

  handleChange(fieldName) {
    return e => {
      switch (fieldName) {
        case 'name':
          this.clearError(fieldName);
          if (e.target.value.length < 2) {
            this.setState(set(assign({}, this.state), 'form.errors.name', true));
          }
          break;
      }

      this.setState(set(assign({}, this.state), ['form', 'values', fieldName], e.target.value));
    };
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <React.Fragment>
        <h1>Contacts</h1>
        <form className="contact-from" onSubmit={this.onSubmit}>
          <Text
            value={name}
            placeholder="Имя"
            onChange={this.handleChange('name')}
            error={this.state.form.errors.name}
          />
          <Text
            value={email}
            placeholder="E-mail"
            onChange={this.handleChange('email')}
            error={this.state.form.errors.email}
          />
          <TextArea
            value={message}
            placeholder="Сообщение"
            onChange={this.handleChange('message')}
          />
          <input type="submit" />
        </form>
      </React.Fragment>
    );
  }
}

const Text = ({ value, onChange, placeholder, error }) => (
  <input
    type="text"
    value={value}
    className={classNames({ error })}
    placeholder={placeholder}
    onChange={onChange}
  />
);

const TextArea = ({ value, onChange, placeholder }) => (
  <textarea value={value} placeholder={placeholder} onChange={onChange} />
);

export default ContactFrom;

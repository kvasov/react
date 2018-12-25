import React from 'react';

import classNames from 'classnames';

function renderField(props) {
  const { touched, error } = props.meta;
  return (
    <div className="form-row">
      <input
        {...props.input}
        className={classNames(props.className, {
          [`${props.className}--error`]: touched && error
        })}
        name={props.input.name}
        placeholder={props.label}
        value={props.input.value}
        type={props.type}
        readOnly={props.readonly}
      />
      {touched && error && <div className="error-field">{error}</div>}
    </div>
  );
}

export default renderField;

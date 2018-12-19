export const required = value =>
  value || typeof value === 'number' ? undefined : 'Нужно заполнить';

export const minLength = min => value =>
  !value || value.length < min ? `Должно быть не менее ${min} символов` : undefined;

export const minLength3 = minLength(3);

export const validEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

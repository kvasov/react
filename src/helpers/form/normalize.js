import { AsYouType } from 'libphonenumber-js';

export const ruPhone = (value) => value && new AsYouType('RU').input(value);

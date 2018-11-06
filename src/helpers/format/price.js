export default function(value, config = {}) {
  const options = {
    // [todo] uncoment if needed
    // minimumFractionDigits: config.min >= 0 ? config.min : 2,
    // maximumFractionDigits: config.max >= 0 ? config.max : 2
  };

  if (config.symbol) {
    options.style = 'currency';
    options.currency = 'RUB';

    value = value.toLocaleString('ru-RU', options);
    value = value.slice(0, value.length - 1);

    switch (config.type) {
      case 'k':
        value += 'коп.';
        break;
      case 't':
        value += 'тыс. ₽';
        break;
      case 'm':
        value += 'млн. ₽';
        break;
      default:
        value += '₽';
        break;
    }

    return value;
  }

  value = value.toLocaleString('ru-RU', options);
  return value;
}

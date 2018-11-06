import React from 'react';

import formatPrice from 'helpers/format/price';

function Price(props) {
  return <span>{formatPrice(props.price)} р.</span>;
}

export default Price;

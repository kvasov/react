import React from 'react';
import PropTypes from 'prop-types';

import formatPrice from '~/helpers/format/price';

function Price(props) {
  return <span>{formatPrice(props.children)} р.</span>;
}

Price.propTypes = {
  children: PropTypes.number
};

export default Price;

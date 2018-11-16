import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from 'core/components/Image';
import TextBox from 'core/components/TextBox';
import Price from 'core/components/Price';
import ProductAdd from '../ProductAdd/index';

import './style.scss';

class ProductCard extends React.PureComponent {
  onDragStart = e => {
    e.dataTransfer.setData('id', this.props.data.id);
    e.dataTransfer.setData('count', 1);
  };

  render() {
    const { className, data } = this.props;

    return (
      <div
        draggable={true}
        onDragStart={this.onDragStart}
        className={classNames(className, 'product-card')}
      >
        <Image src={data.imageUrl} width={200} height={200} />
        <TextBox>{data.title}</TextBox>
        <Price>{data.price}</Price>
        <ProductAdd data={data} />
      </div>
    );
  }
}

ProductCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number
};

export default ProductCard;

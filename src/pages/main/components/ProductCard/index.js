import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { productPath } from '~/helpers/routes/product';

import Image from '~/core/components/Image';
import TextBox from '~/core/components/TextBox';
import Price from '~/core/components/Price';
import ProductAdd from '../ProductAdd/Container';

import './style.scss';

class ProductCard extends React.PureComponent {
  onDragStart = e => {
    e.dataTransfer.setData('id', this.props.data.id);
    e.dataTransfer.setData('name', this.props.data.name);
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
        <Image src={data.img.fields.file.url} width={200} height={200} />
        <Link to={productPath(data.id)}>
          <TextBox>{data.name}</TextBox>
        </Link>
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

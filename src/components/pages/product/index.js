import React from 'react';
import { withRouter } from 'react-router';

import Header from '~/components/shared/Header/index';
import ProductGallery from './components/Gallery/index';

import './style.scss';

function GetImagesArray(arr) {
  const images = [];
  arr.forEach(img => images.push(img.fields.file.url));
  return images;
}

class Product extends React.PureComponent {
  state = {
    currentImg: 0
  };

  render() {
    const { product, location } = this.props;
    const currentImg =
      location.search.split('img=').length > 1 ? location.search.split('img=')[1] : 0;

    return (
      <React.Fragment>
        <Header />
        {product && (
          <div className="product">
            <div className="container">
              <ProductGallery currentImg={currentImg} photos={GetImagesArray(product.gallery)} />
              <div className="product__info">{product.name}</div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Product);

import React from 'react';
import { map } from 'lodash/collection';
import { withRouter } from 'react-router';

import client from '~/helpers/contentful';

import Header from '~/core/components/Header/index';
import ProductGallery from './components/Gallery/index';

import './style.scss';

function GetImagesArray(arr) {
  const images = [];
  arr.forEach(img => images.push(img.fields.file.url));
  return images;
}

class Product extends React.PureComponent {
  state = {
    product: {},
    currentImg: 0,
    loaded: false
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: 'product',
        'fields.id': this.props.id
      })
      .then(response => {
        this.setState({
          product: response.items[0].fields,
          loaded: true
        });
      });
  }

  render() {
    const { product, loaded } = this.state;
    const { location } = this.props;
    let imagesArr = [];
    const currentImg =
      location.search.split('img=').length > 1 ? location.search.split('img=')[1] : 0;

    if (typeof this.state.product.gallery != 'undefined') {
      imagesArr = GetImagesArray(this.state.product.gallery);
    }

    return (
      <React.Fragment>
        <Header />
        <div className="product">
          <div className="container">
            {loaded && <ProductGallery currentImg={currentImg} photos={imagesArr} />}
            <div className="product__info">{product.name}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Product);

import React from 'react';
import client from '~/helpers/contentful';

import Header from '~/core/components/Header/index';

import './style.scss';

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

    return (
      <React.Fragment>
        <Header />
        <div className="product">
          <div className="container">
            <div className="product__photo">
              {loaded && <img src={product.img.fields.file.url} />}
            </div>
            <div className="product__info">{product.name}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;

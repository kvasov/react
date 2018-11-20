import React from 'react';

import Header from 'core/components/Header/index';
import ProductGallery from './components/Gallery/index';

import './style.scss';

class Product extends React.PureComponent {
  state = {
    product: {},
    currentImg: 0,
    loaded: false
  };

  componentDidMount() {
    const contentful = require('contentful');

    const client = contentful.createClient({
      space: 's2s4jjza7wvf',
      environment: 'master',
      accessToken: '60b5336d49589f58f7fbd9ab244e653564609e68f66839f3210567fb3ba678b9'
    });

    client
      .getEntries({
        content_type: 'product',
        'fields.id': this.props.id
      })
      .then(response => {
        this.setState(
          {
            product: response.items[0].fields,
            loaded: true
          },
          () => {
            console.log(this.state.product);
          }
        );
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="product">
          <div className="container">
            {this.state.loaded && <ProductGallery photos={this.state.product.gallery} />}

            <div className="product__info">{this.state.product.name}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;

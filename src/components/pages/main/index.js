import React from 'react';

import Header from 'components/shared/Header/index';
import Catalog from './components/Catalog/Container';
import Favorites from './components/Favorites/index';

class Index extends React.PureComponent {
  state = {
    products: []
  };

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="main-page">
          <div className="container">
            {this.props.location.state ? this.props.location.state.message : ''}
            <Catalog products={products} />
            <Favorites />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;

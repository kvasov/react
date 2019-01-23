import React from 'react';

import Helmet from 'react-helmet';

import Header from 'components/shared/Header/index';
import Catalog from './components/Catalog/index';
import Favorites from './components/Favorites/index';

function Index(props) {
  const { location, products } = props;
  return (
    <React.Fragment>
      <Header />
      <Helmet title="Главная" />
      <div className="main-page">
        <div className="container">
          {location.state ? location.state.message : ''}
          <Catalog products={products} />
          <Favorites />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;

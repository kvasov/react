import React from 'react';

import Header from 'core/components/Header/index';
import Catalog from './components/Catalog/index';

class Index extends React.PureComponent {
  state = {
    products: []
  };

  componentDidMount() {
    const contentful = require('contentful');

    const client = contentful.createClient({
      space: 's2s4jjza7wvf',
      environment: 'master',
      accessToken: '60b5336d49589f58f7fbd9ab244e653564609e68f66839f3210567fb3ba678b9'
    });

    client
      .getEntries()
      .then(response => {
        console.log(response.items);
        this.setState({ products: response.items });
      })
      .catch(console.error);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Catalog products={this.state.products} />
      </React.Fragment>
    );
  }
}

export default Index;

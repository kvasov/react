import React from 'react';
import client from '~/helpers/contentful';

import Header from '~/core/components/Header/index';
import Catalog from './components/Catalog/index';

class Index extends React.PureComponent {
  state = {
    products: []
  };

  componentDidMount() {
    client
      .getEntries()
      .then(response => {
        this.setState({ products: response.items });
      })
      .catch(console.error);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main-page">
          <div className="container">
            {this.props.location.state ? this.props.location.state.message : ''}
            <Catalog products={this.state.products} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;

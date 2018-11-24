import React from 'react';
import { map } from 'lodash/collection';
import { Route, Switch } from 'react-router-dom';

import СartContext from '~/core/components/cartContext';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props =>
        route.render ? route.render(props) : <route.component {...props} routes={route.routes} />
      }
    />
  );
}

class App extends React.Component {
  state = {
    products: [],
    cart: []
  };

  addToCart(id, name, count) {
    this.setState({
      cart: this.state.cart.concat([{ id, name, count: parseInt(count) }])
    });
  }

  removeFromCart(id) {
    const res = [];
    map(this.state.cart, (product, i) => {
      if (id !== i) {
        res.push(product);
      }
    });

    this.setState({
      cart: res
    });
  }

  checkItemInCart(id) {
    let res = false;
    map(this.state.cart, product => {
      if (product.id == id) {
        res = true;
      }
    });

    return res;
  }

  render() {
    return (
      <СartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: (id, name, count) => this.addToCart(id, name, count),
          removeFromCart: id => this.removeFromCart(id),
          checkItemInCart: id => this.checkItemInCart(id)
        }}
      >
        <Switch>
          {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </СartContext.Provider>
    );
  }
}

export default App;

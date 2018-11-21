import React from 'react';
import { map } from 'lodash/collection';
import { Redirect } from 'react-router-dom';

import СartContext from 'core/components/cartContext';

import './style.scss';

function List(props) {
  return map(props.cart, (item, i) => (
    <tr key={i}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.count}</td>
      <td>
        <div onClick={() => props.removeFromCart(i)}>удалить</div>
      </td>
    </tr>
  ));
}

function CartContent(props) {
  return (
    <React.Fragment>
      {props.cart.length > 0 ? (
        <div className="container">
          <table className="table-cart">
            <tbody>
              <List cart={props.cart} removeFromCart={props.removeFromCart} />
            </tbody>
          </table>
        </div>
      ) : (
        <Redirect to={{ pathname: '/', state: { message: 'нет товаров в корзине' } }} />
      )}
    </React.Fragment>
  );
}

export default () => (
  <СartContext.Consumer>
    {({ cart, removeFromCart }) => <CartContent cart={cart} removeFromCart={removeFromCart} />}
  </СartContext.Consumer>
);

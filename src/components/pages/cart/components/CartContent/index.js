import React from 'react';
import { map } from 'lodash/collection';
import { Redirect } from 'react-router-dom';

import './style.scss';

class CartContent extends React.PureComponent {
  list(products) {
    return map(products, (item, i) => (
      <tr key={i}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.count}</td>
        <td>
          <div onClick={() => this.props.onRemoveProduct(item.id)}>удалить</div>
        </td>
      </tr>
    ));
  }

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        {products.length > 0 ? (
          <div className="container">
            <table className="table-cart">
              <tbody>{this.list(products)}</tbody>
            </table>
          </div>
        ) : (
          <Redirect to={{ pathname: '/', state: { message: 'нет товаров в корзине' } }} />
        )}
      </React.Fragment>
    );
  }
}

export default CartContent;

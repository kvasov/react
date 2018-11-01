import React from 'react';
import { map } from 'lodash/collection';

import Check from './check';

import './styles.scss';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      cost: 0,
      items: [],
      total: 0
    };

    this.handleSetName = this.handleSetName.bind(this);
    this.handleSetCost = this.handleSetCost.bind(this);
  }

  componentDidMount() {
    this.Check = new Check();
    this.setState({
      items: this.Check.items
    });
  }

  handleSetName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSetCost(e) {
    this.setState({
      cost: e.target.value
    });
  }

  add() {
    this.Check.add(this.state.name, parseInt(this.state.cost));
    this.setState({
      name: '',
      cost: 0
    });
    this._update();
  }

  remove(name) {
    this.Check.remove(name);
    this._update();
  }

  _update() {
    this.setState({
      items: this.Check.items,
      total: this.Check.totalCost
    });
  }

  render() {
    return (
      <div className="check">
        <div className="check__form">
          <input
            className="check__input"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleSetName}
          />
          <input
            className="check__input"
            type="text"
            placeholder="cost"
            value={this.state.cost}
            onChange={this.handleSetCost}
          />
          <input
            className="check__btn"
            type="button"
            value="Add"
            onClick={() => {
              this.add();
            }}
          />
        </div>

        {this.state.items.length > 0 && (
          <div className="check__list">
            {map(this.state.items, (item, i) => (
              <div key={i} className="check__item">
                <div>{item.name}</div>
                <div className="check__cost">{item.cost}</div>

                <input
                  className="check__remove"
                  type="button"
                  value="remove"
                  onClick={() => {
                    this.remove(item.name);
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="check__total">total: {this.state.total}</div>
      </div>
    );
  }
}

export default Index;

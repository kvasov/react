class Check {
  constructor() {
    this._items = [];
  }

  add(name, cost) {
    this._items.push({ name, cost });
  }

  remove(name) {
    this._items = this._items.filter(item => item.name !== name);
  }

  get items() {
    return this._items;
  }

  get totalCost() {
    let total = 0;
    this._items.forEach(item => (total += item.cost));
    return total;
  }
}

export default Check;

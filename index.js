import React from 'react';
import ReactDOM from 'react-dom';

import Calc from './src/calc';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 0,
      action: '',
      res: 0
    };

    this.handleSetA = this.handleSetA.bind(this);
    this.handleSetB = this.handleSetB.bind(this);
  }

  componentDidMount() {
    this.Calc = new Calc();
  }

  handleSetA(e) {
    this.setState({
      a: e.target.value
    });
  }

  handleSetB(e) {
    this.setState({
      b: e.target.value
    });
  }

  calc(action) {
    this.setState({
      res: this.Calc.make(this.state.a, this.state.b, action)
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.a} onChange={this.handleSetA} />
        <input
          type="button"
          value="+"
          onClick={() => {
            this.calc('plus');
          }}
        />
        <input
          type="button"
          value="-"
          onClick={() => {
            this.calc('minus');
          }}
        />
        <input type="text" value={this.state.b} onChange={this.handleSetB} />
        {this.state.res}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

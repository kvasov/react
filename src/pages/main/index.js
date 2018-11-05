import React from 'react';

import './style.scss';

class Index extends React.PureComponent {
  state = {
    a: 0
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.a}
      </div>
    );
  }
}

export default Index;

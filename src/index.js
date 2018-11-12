import React from 'react';
import ReactDOM from 'react-dom';

import './styles/reset.scss';

import Start from './pages/main/index';

function Index() {
  return <Start />;
}

ReactDOM.render(<Index />, document.getElementById('root'));

import React from 'react';
import classNames from 'classnames';

import HeaderCart from '../HeaderCart/index';

import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className={classNames('header__container', 'container')}>
        <a href="#" className="header__logo" />
        <HeaderCart />
      </div>
    </header>
  );
}

export default Header;
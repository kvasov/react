import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { rootPath } from 'helpers/routes/index';

import HeaderMenu from '../HeaderMenu/index';
import HeaderCart from '../HeaderCart/index';

import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className={classNames('header__container', 'container')}>
        <Link to={rootPath()} href="#" className="header__logo" />
        <HeaderMenu />
        <HeaderCart />
      </div>
    </header>
  );
}

export default Header;

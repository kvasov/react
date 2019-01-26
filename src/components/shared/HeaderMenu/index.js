import React from 'react';
import { Link } from 'react-router-dom';

import { aboutPath } from 'helpers/routes/about';
import { contactsPath } from 'helpers/routes/contacts';

import './style.scss';

function Menu() {
  return (
    <React.Fragment>
      <Link to={aboutPath()}>О нас</Link>
      <Link to={contactsPath()}>Контакты</Link>
    </React.Fragment>
  );
}

export default Menu;

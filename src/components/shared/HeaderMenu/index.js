import React from 'react';
import { Link } from 'react-router-dom';

import { aboutPath } from '~/helpers/routes/about';

import './style.scss';

function Menu() {
  return <Link to={aboutPath()}>О нас</Link>;
}

export default Menu;

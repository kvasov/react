import React from 'react';
import PropTypes from 'prop-types';

function styles(params) {
  return {
    width: `${params.width}px`,
    height: `${params.height}px`
  };
}

function Image(props) {
  return <img src={props.src} style={styles(props)} alt={props.alt} />;
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;

import React from 'react';

function styles(params) {
  return {
    width: `${params.width}px`,
    height: `${params.height}px`
  };
}

function Image(props) {
  return <img src={props.src} style={styles(props)} alt={props.alt} />;
}

export default Image;

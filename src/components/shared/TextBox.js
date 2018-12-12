import React from 'react';
import PropTypes from 'prop-types';

function TextBox(props) {
  return <span dangerouslySetInnerHTML={{ __html: props.children }} />;
}

TextBox.propTypes = {
  children: PropTypes.string
};

export default TextBox;

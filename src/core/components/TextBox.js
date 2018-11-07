import React from 'react';

function TextBox(props) {
  return <span dangerouslySetInnerHTML={{ __html: props.children }} />;
}

export default TextBox;

import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends React.PureComponent {
  el = document.createElement('div');

  componentDidMount() {
    this.el.classList.add('modal-in');
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
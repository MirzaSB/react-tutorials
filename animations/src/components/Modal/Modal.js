import React from 'react';

import './Modal.css';
import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
  enter: 400,
  exit: 1000
};

const modal = (props) => {

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: ''
      }}
    >
        <div className="Modal">
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    </CSSTransition>
  );

};

export default modal;
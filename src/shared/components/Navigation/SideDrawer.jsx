import React from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const contentDrawer = (
    <CSSTransition
    in={props.show}
    timeout={200}
    classNames='slide-in-left'
    mountOnEnter
    unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDom.createPortal(contentDrawer, document.getElementById('sideDrawer-hook'));
};

export default SideDrawer;

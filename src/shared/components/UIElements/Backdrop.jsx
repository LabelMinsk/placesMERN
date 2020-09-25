import React from 'react';
import ReactDOM from 'react-dom'


import './Backdrop.css';

const BackDrop = (props) =>{
    return ReactDOM.createPortal(
        <div className='backdrop' onClick={props.onClick}></div>
        ,document.getElementById('backDrop-hook'))

}

export default BackDrop;
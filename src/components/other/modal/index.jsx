import React from 'react';
import './index.scss';
export const Modal = (props)=> {
  return(
    <div className="modal-container">
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-content">
            <span className="selected-count"> User has selected {props.selectedList.join(', ')} slides.</span>
            <span className="confirm-btn" onClick={e=> props.closeModal(false)}>Okay</span>
        </div>
      </div>
    </div>
  )
}

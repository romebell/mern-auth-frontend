import React from "react";

const Modal = ({header, children, footer, cancelButton}) => {
  
  // Assign cancel button to Browser "Back"
  const handleCancel = () => {
    window.history.back();
  }
  
  // if cancelButton is true return a cancel button
  const cancel = cancelButton
  ? (<button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>) 
  : undefined;
  
  return (
  <div className="modal fade show" style={{display: "block"}} tabIndex="1">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content p-4">
        {header
          ? <div className="modal-header">{ header }</div>
          : undefined}
        <div className="modal-body">
          {children}
        </div>
        {footer || cancel
        ? <div className="modal-footer mt-4">{ cancel }{ footer }</div>
        : undefined}
      </div>
    </div>
</div>
)
}

export default Modal;
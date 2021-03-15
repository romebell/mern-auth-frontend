import React from "react";

const Modal = ({header, children, footer}) => {
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
        {footer
        ? <div className="modal-footer mt-4">{ footer }</div>
        : undefined}
      </div>
    </div>
</div>
)
}

export default Modal;
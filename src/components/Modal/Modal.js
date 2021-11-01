import React from "react";
import PropTypes from "prop-types";

const Modal = ({
  title,
  openState,
  closeModal,
  saveChanges,
  saveChangesText,
  validationCondition = false,
  children,
}) => (
  <div className={`modal ${openState ? "is-active" : ""}`}>
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button className="delete" aria-label="close" onClick={closeModal} />
      </header>
      <section className="modal-card-body">{children}</section>
      <footer className="modal-card-foot">
        <button
          className="button is-success"
          onClick={saveChanges}
          disabled={!validationCondition}
        >
          {saveChangesText}
        </button>
        <button className="button" onClick={closeModal}>
          Cancel
        </button>
      </footer>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  openState: PropTypes.bool.isRequired,
  saveChanges: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: "TITLE REQUIRED",
  openState: false,
  saveChanges: () => {},
  closeModal: () => {},
  content: () => <p>CONTENT REQUIRED</p>,
};

export default Modal;

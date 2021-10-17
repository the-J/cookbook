import React from "react";
import PropTypes from "prop-types";

const Modal = ({ title, openState, closeModal, saveChanges, content }) => (
  <div className={`modal ${openState ? "is-active" : ""}`}>
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button className="delete" aria-label="close" onClick={closeModal} />
      </header>
      <section className="modal-card-body">{content}</section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={saveChanges}>
          Add
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
  content: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  title: "TITLE REQUIRED",
  openState: false,
  saveChanges: () => {},
  closeModal: () => {},
  content: <p>CONTENT REQUIRED</p>,
};

export default Modal;

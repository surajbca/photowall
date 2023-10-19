// ImagePopup.js
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

function ImagePopup({ isOpen, image, onRequestClose }) {
  const customStyles = {
    content: {
      width: "50%", // Adjust this value for the desired width
      height: "auto",
      margin: "40px auto auto auto",
    },
  };
  const imageStyles = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };
  const cancelButton = {
    position: "absolute",
    right: "23px",
    background: "transparent",
    border: "none",
    padding: "0",
    cursor: "pointer",
    color: "black",
    margin: "-20px auto auto auto",
  };
  if (!image) {
    return null; // or handle the missing image case as needed
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Pop-up"
      style={customStyles}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={imageStyles}
      />
      <button onClick={onRequestClose} style={cancelButton}>
        Close
      </button>
    </Modal>
  );
}

export default ImagePopup;

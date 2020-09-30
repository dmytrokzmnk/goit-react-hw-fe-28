import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, openModal }) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={() => openModal(largeImageURL, tags)}
        />
      </li>
    </>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

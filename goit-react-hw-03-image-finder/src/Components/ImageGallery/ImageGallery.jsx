import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({ imagesCollection, openModal }) => {
  return (
    <>
      <ul className="ImageGallery">
        {imagesCollection.map((image) => (
          <ImageGalleryItem key={image.id} {...image} openModal={openModal} />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  imagesCollection: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;

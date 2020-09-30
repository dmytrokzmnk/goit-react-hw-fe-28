import React from "react";
import PropTypes from "prop-types";
import SearchbarContainer from "../../Containers/Searchbar/SearchbarContainer";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import ModalContainer from "../../Containers/Modal/ModalContainer";

const ImageFinder = ({
  onSubmit,
  imagesCollection,
  loadMore,
  loader,
  error,
  openModal,
  modalWindow,
  isModal,
  closeModal,
}) => {
  return (
    <>
      <SearchbarContainer onSubmit={onSubmit} />
      {loader && <Loader />}
      {error && <h1>something went wrong, try again later</h1>}
      {!loader && !error && !!imagesCollection.length && (
        <ImageGallery
          imagesCollection={imagesCollection}
          openModal={openModal}
        />
      )}
      {!!imagesCollection.length && !loader && (
        <Button loadMore={loadMore}></Button>
      )}
      {isModal && (
        <ModalContainer
          modalWindow={modalWindow}
          closeModal={closeModal}
          isModal={isModal}
        />
      )}
    </>
  );
};

ImageFinder.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  imagesCollection: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  modalWindow: PropTypes.shape({}),
  isModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ImageFinder;

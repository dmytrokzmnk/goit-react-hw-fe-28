import React, { useState } from "react";
import ImageFinder from "../../Components/ImageFinder/ImageFinder";
import axios from "../../helpers/axios";
import builderURL from "../../helpers/builderURL";
import scrollTo from "../../hooks/scrollTo";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ImageFinderContainer = (props) => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [imagesCollection, setImagesCollection] = useState([]);
  const [error, setError] = useState(false);
  const [numberPage, setNumberPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [modalWindow, setModalWindow] = useState({ url: "", alt: "" });
  const [isModal, setIsModal] = useState(false);

  const requestMoreImages = async (value, page = 1, prevValue) => {
    if (!value) {
      conditionalEmptyInput();
      return;
    }
    if (value === prevValue) return;
    setQuery(value);
    setLoader(true);
    try {
      const response = await axios.get(
        builderURL(
          `q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
        )
      );
      conditionalFillingList(prevValue, value, response.data.hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const loadMore = () => {
    const newPage = numberPage + 1;
    requestMoreImages(query, newPage);
    setNumberPage(newPage);
  };

  scrollTo(imagesCollection, loader);

  const conditionalEmptyInput = () => {
    setImagesCollection([]);
    setNumberPage(1);
    toast.success("🤓Hey! Are you here? I don't see what you're looking.");
  };

  const conditionalFillingList = (prevValue, value, data) => {
    if (!prevValue) {
      setImagesCollection([...imagesCollection, ...data]);
      return;
    }
    if (prevValue !== value) {
      setImagesCollection([...data]);
      return;
    }
  };

  const openModal = (image, caption) => {
    setModalWindow({ url: image, alt: caption });
    setIsModal(true);
  };
  const closeModal = (isModal) => {
    setIsModal(!isModal);
  };

  return (
    <ImageFinder
      onSubmit={requestMoreImages}
      imagesCollection={imagesCollection}
      loadMore={loadMore}
      loader={loader}
      error={error}
      openModal={openModal}
      modalWindow={modalWindow}
      isModal={isModal}
      closeModal={closeModal}
    />
  );
};

export default ImageFinderContainer;

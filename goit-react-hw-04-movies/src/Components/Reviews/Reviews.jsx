import React, { useState, useEffect, useCallback } from "react";
import { getReviews } from "../../helpers/axios";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const movieId = useParams().movieId;
  const requestReviews = useCallback(async (id) => {
    try {
      const response = await getReviews(id);
      setReviews([...response.data.results]);
    } catch (error) {
      setErrorMessage(error.response.data.status_message);
    }
  }, []);
  useEffect(() => {
    requestReviews(movieId);
  }, [movieId, requestReviews]);
  return (
    <ul>
      {errorMessage && <Error error={errorMessage} />}
      {!errorMessage &&
        !!reviews.length &&
        reviews.map((el) => (
          <li key={el.id}>
            <h2>Author:{el.author} </h2>
            <p>{el.content}</p>
          </li>
        ))}
      {!errorMessage && !!reviews.length < 1 && (
        <h2>We don't have reviews for this movie.</h2>
      )}
    </ul>
  );
};

export default Reviews;

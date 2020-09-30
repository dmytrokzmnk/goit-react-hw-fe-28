import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Photo } from "./Cast.styles";
import { getCast } from "../../helpers/axios";
import imageNotFound from "../../images/imageNotFound-min.png";
import Error from "../Error/Error";
import { w200Picture } from "../../utils/imageApi";
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const movieId = useParams().movieId;
  const requestCast = useCallback(async (id) => {
    try {
      const response = await getCast(id);
      setCast([...response.data.cast]);
    } catch (error) {
      setErrorMessage(error.response.data.status_message);
    }
  }, []);
  useEffect(() => {
    requestCast(movieId);
  }, [movieId, requestCast]);
  return (
    <ul className="CastWrapper">
      {errorMessage && <Error error={errorMessage} />}
      {!errorMessage &&
        cast.map((el) => (
          <li key={el.id}>
            <Photo
              src={
                el.profile_path
                  ? `${w200Picture}${el.profile_path}`
                  : imageNotFound
              }
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;

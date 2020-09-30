/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, lazy, Suspense } from "react";
import { getDetails } from "../../helpers/axios";
import {
  useParams,
  useHistory,
  useLocation,
  Route,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import {
  Button,
  Article,
  Poster,
  Title,
  Text,
  Subtitle,
  Section,
  List,
  Item,
  ListGenres,
} from "./MovieDetails.styles";

import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";
import { originalPicture } from "../../utils/imageApi";
const Reviews = lazy(() =>
  import("../../Components/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
);
const Cast = lazy(() =>
  import("../../Components/Cast/Cast" /* webpackChunkName: "Cast" */)
);

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const movieId = useParams().movieId;
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const path = useRouteMatch().path;

  useEffect(() => {
    getDetails(movieId)
      .then((response) => setFilmDetails({ ...response.data }))
      .catch((error) => setErrorMessage(error.response.data.status_message));
  }, []);
  const goBack = () => {
    if (location.state) {
      history.push(location.state.from);
      return;
    }

    history.push("/");
  };

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
  } = filmDetails;
  return (
    <>
      {errorMessage && <Error error={errorMessage} />}
      {!errorMessage && !!Object.keys(filmDetails).length && (
        <>
          <Button onClick={goBack}>go back</Button>
          <Article>
            <Poster
              src={`${originalPicture}${poster_path}`}
              alt={original_title}
              width="400"
              height="600"
            />
            <Section>
              <Title>{original_title}</Title>
              <Text>User Score: {vote_average * 10}%</Text>
              <Subtitle>Overview</Subtitle>
              <Text>{overview}</Text>
              <Subtitle>Genres</Subtitle>
              <ListGenres>
                {genres.map((el) => (
                  <Item key={el.id}>{el.name}</Item>
                ))}
              </ListGenres>
            </Section>
          </Article>
          <Section>
            <Subtitle>Additional information</Subtitle>
            <List>
              <Item>
                <NavLink
                  to={{
                    pathname: `${url}/cast`,
                    state: {
                      from: location.state.from,
                    },
                  }}
                >
                  Cast
                </NavLink>
              </Item>
              <Item>
                <NavLink
                  to={{
                    pathname: `${url}/reviews`,
                    state: {
                      from: location.state.from,
                    },
                  }}
                >
                  Reviews
                </NavLink>
              </Item>
            </List>
          </Section>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </Suspense>
    </>
  );
};

export default MovieDetails;

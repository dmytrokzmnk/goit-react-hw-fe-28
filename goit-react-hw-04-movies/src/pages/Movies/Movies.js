import React, { useState, useEffect } from "react";
import { getMoviesList } from "../../helpers/axios";
import { useLocation, useHistory, Link } from "react-router-dom";
import queryString from "query-string";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";
import { Form, Input, Button, List, Item } from "./Movies.styles";
import routers from "../../utils/pathRouter";
const MoviesPageScreen = () => {
  const [value, setValue] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const location = useLocation();
  const { MOVIES } = routers;

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    history.push({ ...location, search: `?query=${value}` });
    setValue("");
  };

  useEffect(() => {
    setLoader(true);
    if (!location.search) {
      setValue("");
      return;
    }
    const query = queryString.parse(location.search).query;
    getMoviesList(query)
      .then((response) => setFoundMovies([...response.data.results]))
      .catch((error) => setErrorMessage(error.response.data.status_message));
  }, [location.search]);

  useEffect(() => {
    setLoader(false);
  }, [foundMovies]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="enter movie to search"
          autoFocus
        />
        <Button type="submit">Search</Button>
      </Form>
      {errorMessage && <Error error={errorMessage} />}
      {!errorMessage && loader && <Loader />}
      {!errorMessage && !loader && (
        <List>
          {foundMovies.map((el) => (
            <Item key={el.id}>
              <Link
                to={{
                  pathname: `${MOVIES}/${el.id}`,
                  state: { from: location },
                }}
              >
                {el.title}
              </Link>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default MoviesPageScreen;

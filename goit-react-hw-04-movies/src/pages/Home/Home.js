import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { getTrending } from "../../helpers/axios";
import routers from "../../utils/pathRouter";
import { List, Item, Wrap } from "./Home.styles";
import Error from "../../Components/Error/Error";
const HomePageScreen = () => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();
  const { MOVIES } = routers;

  useEffect(() => {
    getTrending()
      .then((response) => setItems([...response.data.results]))
      .catch((error) => setErrorMessage(error.response.data.status_message));
  }, []);

  return (
    <>
      {errorMessage && <Error error={errorMessage} />}
      {!errorMessage && (
        <Wrap>
          <h1>Trending today</h1>
          <List>
            {items &&
              items.map((el) => (
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
        </Wrap>
      )}
    </>
  );
};

export default HomePageScreen;

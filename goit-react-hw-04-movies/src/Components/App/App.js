import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import routers from "../../utils/pathRouter";

const HomePageScreen = lazy(() =>
  import("../../pages/Home/Home" /* webpackChunkName: "HomePage" */)
);
const MoviesPageScreen = lazy(() =>
  import("../../pages/Movies/Movies" /* webpackChunkName: "MoviesPageScreen" */)
);
const MovieDetailsPageScreen = lazy(() =>
  import(
    "../../pages/MovieDetails/MovieDetails" /* webpackChunkName: "DetailsPageScreen" */
  )
);

const App = () => {
  const { HOME, MOVIE_DETAILS, MOVIES } = routers;
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={HOME} component={HomePageScreen} />
          <Route path={MOVIE_DETAILS} component={MovieDetailsPageScreen} />
          <Route path={MOVIES} component={MoviesPageScreen} />
          <Redirect to={HOME} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

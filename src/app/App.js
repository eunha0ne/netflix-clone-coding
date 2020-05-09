import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Layout } from '~/layout';
import { Loading } from '~/components/Loading';

const Home = lazy(() => import('~/pages/Browse'));
const Tv = lazy(() => import('~/pages/Browse'));
const Movie = lazy(() => import('~/pages/Browse'));
const Latest = lazy(() => import('~/pages/Browse'));
const MyList = lazy(() => import('~/pages/MyList'));
const Search = lazy(() => import('~/pages/Search'));

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/browse" />
          </Route>
          <Route exact path="/browse" component={Home} />
          <Route
            path="/browse/:genre/:id"
            render={({ match }) => {
              if (match.isExact) {
                const name = match.params.genre;
                const page = {
                  tv: <Tv />,
                  movie: <Movie />,
                  latest: <Latest />
                };
                return page[name];
              } else return <Redirect to={match.url} />;
            }}
          />
          <Route path="/my-list" component={MyList} />
          <Route path="/search" component={Search} />
          <Route path="*">
            <Redirect to="/browse" />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loading } from '~/components/Loading';
import Layout from '~/layout';

const Home = lazy(() => import('~/pages/Home'));
const Tv = lazy(() => import('~/pages/Tv'));
const Movie = lazy(() => import('~/pages/Movie'));
const Latest = lazy(() => import('~/pages/Latest'));
const MyList = lazy(() => import('~/pages/MyList'));
const Search = lazy(() => import('~/pages/Search'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tv">
            <Tv />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/my-list">
            <MyList />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

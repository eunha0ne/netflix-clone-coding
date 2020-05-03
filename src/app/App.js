import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Loading } from '~/components/Loading';
import Layout from '~/layout';

const Home = lazy(() => import('~/pages/Home'));
const MyList = lazy(() => import('~/pages/MyList'));
const Search = lazy(() => import('~/pages/Search'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/browse" />
          </Route>
          <Route path="/browse">
            <Home />
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

import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from '~/layout';
import { Loading } from '~/components/Loading';

const Browse = lazy(() => import('~/pages/Browse'));
const MyList = lazy(() => import('~/pages/MyList'));
const Search = lazy(() => import('~/pages/Search'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Redirect to={'/browse'} />
          </Route>
          <Route exact path="/browse">
            <Browse />
          </Route>
          <Route
            path="/browse/:genre/:id"
            render={({ match }) => {
              const isPathMatch = match.isExact;
              return isPathMatch ? <Browse /> : <Redirect to={match.url} />;
            }}
          />
          <Route path="/my-list">
            <MyList />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="*">
            <Redirect to="/browse" />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

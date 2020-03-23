import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '~/layout';

const Home = lazy(() => import('~/pages/Home'));
const About = lazy(() => import('~/pages/About'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

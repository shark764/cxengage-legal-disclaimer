import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import CxEngage from './legal/cxengage';
import Mitel from './legal/mitel';
import NotFound from './components/NotFound';
import RouteWrapper from './components/RouteWrapper';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={RouteWrapper(CxEngage)} />
      <Route
        path="/cxengage-legal/:locale?"
        component={RouteWrapper(CxEngage)}
      />
      <Route path="/mitel-legal/:locale?" component={RouteWrapper(Mitel)} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;

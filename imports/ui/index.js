import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import App from './components/app';
import BuildingList from './containers/building_list';
import NewBuilding from './containers/new_building';

import reducers from './reducers'

const devtoolsExt = global.devToolsExtension && global.devToolsExtension();
const client = new ApolloClient(meteorClientConfig());

reducers.apollo = client.reducer()

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(client.middleware()),
    devtoolsExt || (f => f),
  )
);

Meteor.startup(() => {
  render((
    <ApolloProvider store={store} client={client}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/buildings" />
          <Route path="/buildings" component={BuildingList}/>
          <Route path="/buildings/new" component={NewBuilding}/>
        </Route>
      </Router>
    </ApolloProvider>
  ), document.getElementById('root'));
});

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '~redux/store';

import { Home, Write, Feed, Post, NotFound, Edit } from '~pages';
import { Layout } from '~hoc';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/write">
                        <Write />
                    </Route>
                    <Route exact path="/feed">
                        <Feed />
                    </Route>
                    <Route exact path="/feed/:slug">
                        <Post />
                    </Route>
                    <Route exact path="/edit/:slug">
                        <Edit />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;

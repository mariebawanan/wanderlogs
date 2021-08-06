import React from 'react';
import { Layout } from '~hoc';
import {
    Home,
    Write,
    Profile,
    Feed,
    Post,
    NotFound,
} from '~components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '~redux/store';

const App = () => {
    return (
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
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/feed/:slug">
                            <Post />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
};

export default App;

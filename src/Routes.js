import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/login';
 
class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Redirect exact from="*" to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Routes;
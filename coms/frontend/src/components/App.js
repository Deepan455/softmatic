import React, { Component, Fragment } from 'react'
import {render} from "react-dom";
import {Provider} from 'react-redux';
import store from '../store';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import { Dashboard } from './layout/Dashboard';
import PrivateRoute from './layout/common/PrivateRoute';
import Login from './layout/accounts/login';
import { loadUser } from './actions/auth';

export class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }
    render() {

        return (
            <Provider store = {store}>
                <Router>
                    <Fragment>
                        <div className = "container">
                            <Switch>
                                <PrivateRoute exact path="/" component={Dashboard}/>
                                <Route exact path = "/login" component={Login}/>
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

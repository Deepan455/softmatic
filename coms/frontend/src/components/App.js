import React, { Component, Fragment } from 'react'
import {render} from "react-dom";
import { Dashboard } from './layout/Dashboard';
import {Provider} from 'react-redux';
import store from './store';

export class App extends Component {
    
    render() {
        return (
            <Provider store = {store}>
                <Fragment>
                    <div>
                        <Dashboard/>
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

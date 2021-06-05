import React, { Component } from 'react'
import {render} from "react-dom";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                Hello all
            </div>
        )
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

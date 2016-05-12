import React, {Component} from 'react';
import {data as gimmes} from './data';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {gimmes: []};
    }

    // Autobinding
    // `= () =>` instead of `.bind(this)` in the `constructor`
    loadGimmesFromServer = () => {
        // TODO: Fetch gimmes from the server
        this.setState({gimmes: gimmes});
    }

    componentDidMount() {
        this.loadGimmesFromServer();
    }

    render() {
        return (
            <div className="app">
                <h1>IRL</h1>
            </div>
        );
    }
};

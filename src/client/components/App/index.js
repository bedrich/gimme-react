import React, {Component} from 'react';
import {data as gimmes} from './data';
import GimmeList from '../GimmeList';

export default class App extends React.Component {
    constructor() {
        super();
        this.loadGimmesFromServer = this.loadGimmesFromServer.bind(this);
        this.state = {gimmes: []};
    }

    loadGimmesFromServer() {
        // TODO: Fetch gimmes from the server
        this.setState({gimmes: gimmes});
    }

    componentDidMount() {
        this.loadGimmesFromServer();
    }

    render() {
        return (
            <div className="app">
                <GimmeList data={this.state.gimmes} />
            </div>
        );
    }
};

import React, {Component} from 'react';

export default class Gimme extends Component {
    render() {
        return (
            <li className="gimme">
                <p className="gimme__name">{this.props.title}</p>
                <img className="gimme__image" src={this.props.src} />
            </li>
        );
    }
}

import React, {Component} from 'react';
import Gimme from '../Gimme';

export default class GimmeList extends Component {
    render() {
        var gimmeNodes = this.props.data.map((gimme) => {
            return (
                <Gimme key={gimme.id} src={gimme.source} title={gimme.title} />
            );
        });

        return (
            <ul className="gimme-list">
                {gimmeNodes}
            </ul>
        );
    }
}

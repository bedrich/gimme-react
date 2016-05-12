// packages can be imported just by their name
import React, { Component } from 'react';

const style = {
  width: '100px'
}

export default class BeanItem extends Component {
  render() {
    const { name, img } = this.props.bean;
    return (
      <li className="bean-item">
        <h3>{name}</h3>
        <img src={img} style={style} />
      </li>
    );
  }
}

// packages can be imported just by their name
import React, { Component } from 'react';

// local files have must be imported with relative paths
import BeanItem from './BeanItem';
import data from './data';

console.log(data);
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Fav Beans</h1>
        {
          data.map((bean, i) => {
            return <BeanItem bean={bean} key={i} />
          })
        }
      </div>
    );
  }
}

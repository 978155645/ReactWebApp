import React, { Component } from 'react';
import Search from './search/Search';
import ClassifyList from './classifylist/ClassifyList';

class Classify extends Component {
  render() {
    return (
      <div
        className="classify-box"
        style={{
          backgroundColor: '#fff',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Search />
        <ClassifyList />
      </div>
    );
  }
}

export default Classify;

import React, { Component } from 'react';
import search from 'images/search.png';
import './index.scss';

class Search extends Component {
  render() {
    return (
      <div className="classify-search-box">
        <div className="search">
          <img className="search-logo" src={search} alt="" />
          <span>搜索商品</span>
        </div>
      </div>
    );
  }
}

export default Search;

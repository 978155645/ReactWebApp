import React, { Component } from 'react';
import './index.scss';
import search from 'images/search.png';

class Search extends Component {
  render() {
    return (
      <div className="search-box">
        <div className="search">
          <img className="search-logo" src={search} alt="" />
          <span className="search-img">
            <img
              src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png"
              alt=""
            />
          </span>
          <span>搜索</span>
        </div>
        <div className="classify">
          <img
            src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Search;

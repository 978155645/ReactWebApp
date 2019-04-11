import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Item = props => {
  let { icon, name, id } = props;
  return (
    <div className="classify-item">
      <NavLink to={{ pathname: '/subcate', state: `${id}` }}>
        <img src={`//s2.juancdn.com${icon}`} alt="" />
        <p>{name}</p>
      </NavLink>
    </div>
  );
};

class ClassifyItem extends Component {
  renderList() {
    let lists = this.props.lists;
    return (
      lists &&
      lists.map(item => {
        return <Item key={item.id} {...item} />;
      })
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.renderList()}
      </div>
    );
  }
}

export default ClassifyItem;

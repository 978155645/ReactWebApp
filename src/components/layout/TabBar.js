import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TabBar.scss';
import getHome from 'utils/store-getter/getHome';

class Nav extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    return true;
  }

  render() {
    return (
      <NavLink activeClassName="active" to={this.props.route_path}>
        <img
          className="img-default"
          src={this.props.default_url}
          alt="图片未加载成功"
        />
        <img
          className="hide img-active"
          src={this.props.active_url}
          alt="图片未加载成功"
        />
        <span>{this.props.text}</span>
      </NavLink>
    );
  }
}

class TabBar extends Component {
  componentWillMount() {
    this.props.getNavList();
  }

  shouldComponentUpdate(nextProps) {
    if (!!nextProps.navList && nextProps.navList !== this.props.navList) {
      return true;
    } else {
      return false;
    }
  }

  renderItem() {
    return (
      this.props.navList &&
      this.props.navList.map(item => {
        return <Nav key={item.id} {...item} />;
      })
    );
  }

  render() {
    return (
      <div className="tab-bar-box">
        <div className="tab-bar">{this.renderItem()}</div>
      </div>
    );
  }
}

export default getHome(TabBar);

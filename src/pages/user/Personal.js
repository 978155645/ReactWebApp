import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import getUser from 'utils/store-getter/getUser';
import './Personal.scss';

class Personal extends Component {
  constructor(props) {
    super(props);
    this.goback = this.goback.bind(this);
    this.state = {
      username: '',
      display1: 'block',
      display2: 'none'
    };
  }

  goback() {
    this.props.history.go(-1);
  }

  componentWillMount() {
    JSON.parse(localStorage.getItem('username')) &&
      this.setState({
        username: JSON.parse(localStorage.getItem('username')),
        display1: 'none',
        display2: 'block'
      });
  }

  render() {
    return (
      <div className="user-box">
        <div className="userCenter">
          <header id="head">
            <div className="userTop">
              <span className="go-back" onClick={this.goback}>
                返回
              </span>
              <p id="t-index">个人中心</p>
            </div>
            <div className="user-login">
              <div style={{ display: this.state.display1, width: '100%' }}>
                <ul>
                  <li>
                    <NavLink activeClassName="active" to="/user/register">
                      注册
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/user/login">
                      登录
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div style={{ display: this.state.display2 }}>
                <p className="user-name">{this.state.username},欢迎您！</p>
              </div>
            </div>
          </header>
        </div>
        <div className="userBox">
          <ul className="order user-item">
            <li>我的订单</li>
            <li className="all-order">全部订单</li>
          </ul>
          <ul className="coupon user-item">
            <li>我的优惠券</li>
          </ul>
          <ul className="fav user-item">
            <li>我的收藏</li>
          </ul>
          <ul className="pintuan user-item">
            <li>我的拼团</li>
          </ul>
          <ul className="free user-item">
            <li>我的免单券</li>
            <li className="other-style">0张</li>
          </ul>
          <ul className="jieqian user-item">
            <li>借钱</li>
            <li className="other-style">新用户免费领1000元</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default getUser(Personal);

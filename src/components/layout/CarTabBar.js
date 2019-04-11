import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import getCart from 'utils/store-getter/getCart';
import './CarTabBar.scss';

class CarTabBar extends Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    let { goods_id, shopInfo } = this.props;
    if (!JSON.parse(localStorage.getItem('username'))) {
      this.props.history.push('/user/login');
    }
    this.props.addCart(goods_id, shopInfo);
  }

  render() {
    return (
      <div className="car-tab-bar-box">
        <ul className="tab-bar">
          <li>
            <NavLink to="/home">
              <img
                className="img-default"
                src="https://goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png"
                alt=""
              />
              <img
                className="hide img-active"
                src="https://s1.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png"
                alt=""
              />
              <span>首页</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <img
                className="img-default"
                src="https://s1.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png"
                alt=""
              />
              <img
                className="hide img-active"
                src="https://goods4.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png"
                alt=""
              />
              <span>购物车</span>
            </NavLink>
          </li>
          <li id="buyBtn" onClick={this.addCart}>
            加入购物车
          </li>
        </ul>
      </div>
    );
  }
}

export default getCart(withRouter(CarTabBar));

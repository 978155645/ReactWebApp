import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

class GoodItem extends Component {
  render() {
    let {
      goods_id,
      pic_url,
      logo_url,
      cprice,
      oprice,
      coupon_tips,
      title,
      time_left
    } = this.props;
    return (
      <div className="good-item item" data-id={goods_id}>
        <NavLink to={{ pathname: '/details', state: goods_id }}>
          <div className="goods-img">
            <img width="100%" src={pic_url} alt="" />
          </div>
          <div className="goods-logo">
            <img src={logo_url} alt="" />
          </div>
          <div className="goods-info">
            {!coupon_tips && (
              <p className="price">
                ￥{cprice}
                <span className="del-price">￥{oprice}</span>
              </p>
            )}
            <p className="sales">{coupon_tips}</p>
            <p className="title">{title}</p>
            <span className="flag">{time_left}</span>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default GoodItem;

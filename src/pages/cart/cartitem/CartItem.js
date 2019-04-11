import React, { Component } from 'react';
import './index.scss';
class CartItem extends Component {
  checkedOne(goods_id) {}

  render() {
    let {
      goods_origin_url,
      goods_title,
      sprice,
      oprice,
      num,
      goods_id
    } = this.props;
    return (
      <div className="shop-item">
        <div className="check-box">
          <input
            type="checkbox"
            className="check-btn"
            onClick={this.checkedOne.bind(this, goods_id)}
          />
          <span className="mint-checkbox-core" />
        </div>
        <div className="shop-img">
          <img width="100%" src={goods_origin_url} alt="" />
        </div>
        <div className="shop-info">
          <p className="shop-title">{goods_title}</p>
          <p className="price" v-show="isEdit">
            ￥{sprice}
            <span className="del-price">￥{oprice}</span>
            <span className="shop-num">X{num}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default CartItem;

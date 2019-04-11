import React, { Component } from 'react';
import getCart from 'utils/store-getter/getCart';
import CartItem from './cartitem/CartItem';
import TotalPrices from './totalprices/TotalPrices';
import './index.scss';

class Cart extends Component {
  rendCartItem() {
    let carts = JSON.parse(
      JSON.parse(localStorage.getItem('persist:root')).cart
    ).cartList;
    return (
      carts &&
      carts.map(item => {
        return <CartItem key={item.goods_id} {...item} />;
      })
    );
  }
  render() {
    return (
      <div className="cart-box">
        <div className="cart-title">
          <p className="title">购物车</p>
          <span className="edit">编辑</span>
        </div>
        <div className="shop-box">
          <div className="shop-list">{this.rendCartItem()}</div>
        </div>
        <TotalPrices />
      </div>
    );
  }
}

export default getCart(Cart);

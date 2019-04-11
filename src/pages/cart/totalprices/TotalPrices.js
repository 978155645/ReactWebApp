import React, { Component } from 'react';
import './index.scss';

class TotalPrices extends Component {
  render() {
    return (
      <div className="total-prices-box">
        <div className="check-box">
          <input type="checkbox" className="check-btn" />
          <span className="mint-checkbox-core" />
          <span className="checkall-text">全选</span>
        </div>
        <div v-show="isEdit" className="total-cart">
          <p className="total-prices">
            合计<span>￥0</span>
            <span className="cart-btn">结算(0)</span>
          </p>
        </div>
      </div>
    );
  }
}

export default TotalPrices;

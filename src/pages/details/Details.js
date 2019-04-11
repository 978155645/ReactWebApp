import React, { Component } from 'react';
import getShopInfo from 'utils/store-getter/getShopInfo';
import CarTabBar from 'components/layout/CarTabBar';
import './Details.scss';

const ShopInfo = props => {
  return (
    <div className="details-box">
      <div className="pro_img">
        <img width="100%" src={props.goods_origin_url} alt="" />
      </div>
      <div className="pro_info">
        <p className="price">
          <span className="yuan">￥</span>
          {props.sprice}
          <span className="del-price"> ￥{props.oprice} </span>
          <span className="join-number">{props.join_number}</span>
        </p>
        <p className="title">{props.goods_title}</p>
      </div>
    </div>
  );
};

class Details extends Component {
  componentWillMount() {
    this.props.getShopInfo(this.props.location.state);
  }

  render() {
    return (
      <div>
        {this.props.shopInfo && <ShopInfo {...this.props.shopInfo} />}
        {this.props.shopInfo && (
          <CarTabBar
            shopInfo={this.props.shopInfo}
            goods_id={this.props.location.state}
          />
        )}
      </div>
    );
  }
}

export default getShopInfo(Details);

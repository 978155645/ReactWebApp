import React, { Component } from 'react';
import GoodsItem from 'components/common/gooditem/GoodItem';
import getSubcateList from 'utils/store-getter/getSubcateList';
import './Subcate.scss';

class Subcate extends Component {
  componentWillMount() {
    let cateid = this.props.location.state;
    this.props.getSubcateInfo(cateid);
  }

  rendItem() {
    return (
      this.props.cateList &&
      this.props.cateList.map(item => {
        return <GoodsItem key={item.goods_id} {...item} />;
      })
    );
  }

  goBack = () => {
    this.props.history.go(-1);
  };

  render() {
    return (
      <div className="subcate-block">
        <span onClick={this.goBack}>返回</span>
        <span className="h-title">{this.props.cateName}</span>
        <div className="subcate-list">{this.rendItem()}</div>
      </div>
    );
  }
}

export default getSubcateList(Subcate);

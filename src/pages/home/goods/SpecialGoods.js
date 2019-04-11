import React, { Component } from 'react';
import GoodItem from 'components/common/gooditem/GoodItem';
import getHome from 'utils/store-getter/getHome';
import scroll from 'utils/scroll';

class SpecialGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        page: 1,
        zy_ids: 'p8_c4_l4',
        app_name: 'zhe',
        catname: 'tab_hpzc',
        flag: 'tab_hpzc'
      }
    };
  }

  componentWillMount() {
    if (!(this.props.specialList && this.props.specialList.data)) {
      this.props.getGoodList(this.state.params, 'GET_SPECIAL_LIST');
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.specialList &&
      nextProps.specialList !== this.props.specialList
    ) {
      scroll({
        el: 'section',
        goodsList: nextProps.specialList.data,
        lists: nextProps.specialList.data.goods,
        _this: this,
        url: '/api/getGoods',
        params: this.state.params
      });
      return true;
    }
    if (this.props.specialList.data) {
      return true;
    }
    return false;
  }

  rendItem() {
    let specialList = this.props.specialList;
    return (
      specialList.data &&
      specialList.data.goods.map((item, index) => {
        return <GoodItem key={index} {...item} />;
      })
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', background: '#fff' }}>
        {this.rendItem()}
      </div>
    );
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
}

export default getHome(SpecialGoods);

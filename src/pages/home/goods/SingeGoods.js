import React, { Component } from 'react';
import GoodItem from 'components/common/gooditem/GoodItem';
import getHome from 'utils/store-getter/getHome';
import scroll from 'utils/scroll';

class SingeGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        page: 1,
        zy_ids: 'p8_c4_l4',
        app_name: 'zhe',
        catname: 'tab_hpdp',
        flag: 'tab_hpdp'
      }
    };
  }

  componentWillMount() {
    if (!(this.props.singleList && this.props.singleList.data)) {
      this.props.getGoodList(this.state.params, 'GET_SINGE_LIST');
    }
    this.setState = (state, callback) => {
      return;
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.singleList &&
      nextProps.singleList !== this.props.singleList
    ) {
      scroll({
        el: 'section',
        goodsList: nextProps.singleList.data,
        lists: nextProps.singleList.data.goods,
        _this: this,
        url: '/api/getGoods',
        params: this.state.params
      });

      return true;
    }
    if (this.props.singleList.data) {
      return true;
    }
    return false;
  }

  rendItem() {
    let singleList = this.props.singleList;
    return (
      singleList.data &&
      singleList.data.goods.map((item, index) => {
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

export default getHome(SingeGoods);

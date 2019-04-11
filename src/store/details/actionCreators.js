import * as type from './type';
import axios from 'axios';

const actionCreators = {
  getShopInfo(goods_id) {
    return dispatch => {
      axios({
        url: '/api/getMemberAboutInfo',
        params: {
          goods_id: goods_id,
          is_pt_goods: 0,
          req_coupons_id: goods_id
        }
      })
        .then(res => {
          let action = {
            type: type.GET_SHOP_INFO,
            payload: res.data.skudata.info
          };
          dispatch(action);
        })
        .catch(err => err);
    };
  }
};

export default actionCreators;

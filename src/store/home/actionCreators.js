import * as type from './type';
import axios from 'axios';

const actionCreators = {
  getNavList() {
    return dispatch => {
      axios({
        url: '/data/tabBar.json'
      })
        .then(res => {
          let action = {
            type: type.GET_NAV_BAR,
            payload: res.data
          };
          dispatch(action);
        })
        .catch(err => err);
    };
  },

  getMySwiper() {
    return dispatch => {
      axios
        .get('/api/getIndexFirstPaintInfo', {
          params: {
            cid: '',
            zy_ids: 'p8_c4_l4',
            app_name: 'zhe',
            app_version: '',
            platform: '',
            catname: 'newest_zhe'
          }
        })
        .then(res => {
          let action = {
            type: type.GET_MY_SWIPER,
            payload: res.data.adsInfo.slide_ads.config.slide
          };
          dispatch(action);
        })
        .catch(error => {
          console.log(error);
        });
    };
  },

  getGoodList(params, listType) {
    return dispatch => {
      axios
        .get('/api/getGoods', {
          params
        })
        .then(res => {
          let action = {
            type: listType,
            payload: res.data
          };
          dispatch(action);
        })
        .catch(error => {
          console.log(error);
        });
    };
  }
};

export default actionCreators;

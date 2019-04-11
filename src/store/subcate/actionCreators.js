import * as type from './type';
import axios from 'axios';
import jsonp from 'jsonp';

const actionCreators = {
  getSubcateInfo(cateId) {
    return dispatch => {
      axios({
        url: '/cate/subcatelist',
        params: {
          cate_id: cateId,
          pf: 8,
          area: 4,
          bi: 222,
          source: null,
          front_cid: null
        }
      })
        .then(res => {
          let action = {
            type: type.GET_SUBCATE_INFO,
            payload: res.data.name
          };
          dispatch(action);
          this.getSubcateList(res.data.key, res.data.type, 1);
        })
        .catch(err => err);
    };
  },

  getSubcateList(key, catetype, currPage) {
    return dispatch => {
      jsonp(
        `https://shop.juanpi.com/gsort?key=${key}&type=${catetype}&zhouyi_ids=p8_c4_l4&machining=danpin&page=${currPage}&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback`,
        null,
        (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            let action = {
              type: type.GET_SUBCATE_LIST,
              payload: data.list
            };
            dispatch(action);
          }
        }
      );
    };
  }
};

export default actionCreators;

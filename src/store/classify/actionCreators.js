import * as type from './type';
import jsonp from 'jsonp';

const actionCreators = {
  getClassifyList() {
    return dispatch => {
      jsonp(
        `https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1551354568409&callback=jsonp2`,
        null,
        (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            let action = {
              type: type.GET_CLASSIFY,
              payload: data
            };
            dispatch(action);
          }
        }
      );
    };
  }
};

export default actionCreators;

import * as type from './type';

const actionCreators = {
  addCart(goods_id, shopInfo) {
    return dispatch => {
      let carts = getCart();
      let i;
      let isHas = carts.some((item, index) => {
        if (item.goods_id === goods_id) {
          i = index;
          return true;
        } else {
          return false;
        }
      });

      if (isHas) {
        let action = {
          type: type.ADD_CART,
          payload: i
        };
        dispatch(action);
      } else {
        let action = {
          type: type.ADD_CART,
          payload: shopInfo
        };
        shopInfo.goods_id = goods_id;
        shopInfo.num = 1;
        dispatch(action);
      }
    };
  }
};

export default actionCreators;

function getCart() {
  return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).cart)
    .cartList;
};

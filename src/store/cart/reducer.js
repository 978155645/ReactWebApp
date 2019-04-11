import state from './state';
import * as type from './type';

const reducer = (previousState = state, action) => {
  let new_state = { ...previousState };
  switch (action.type) {
    case type.ADD_CART:
      if (isNaN(action.payload)) {
        new_state.cartList.push(action.payload);
        new_state.checkedIds.push(action.payload.goods_id);
      } else {
        new_state.cartList[action.payload].num++;
      }
      new_state.count++;
      break;
    default:
      break;
  }
  return new_state;
};

export default reducer;

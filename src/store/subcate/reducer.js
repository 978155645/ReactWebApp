import state from './state';
import * as type from './type';

const reducer = (previousState = state, action) => {
  let new_state = { ...previousState };
  switch (action.type) {
    case type.GET_SUBCATE_INFO:
      new_state.cateName = action.payload;
      break;
    case type.GET_SUBCATE_LIST:
      new_state.cateList = action.payload;
      break;
    default:
      break;
  }
  return new_state;
};

export default reducer;

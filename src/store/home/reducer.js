import state from './state';
import * as type from './type';

const reducer = (previousState = state, action) => {
  let new_state = { ...previousState };
  switch (action.type) {
    case type.GET_NAV_BAR:
      new_state.navList = action.payload;
      break;
    case type.GET_MY_SWIPER:
      new_state.mySwiper = action.payload;
      break;
    case type.GET_SPECIAL_LIST:
      new_state.specialList = action.payload;
      break;
    case type.GET_SINGE_LIST:
      new_state.singleList = action.payload;
      break;
    default:
      break;
  }
  return new_state;
};

export default reducer;

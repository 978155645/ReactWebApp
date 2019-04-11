import { combineReducers } from 'redux';
import home from './home/reducer';
import classify from './classify/reducer';
import user from './user/reducer';
import subcate from './subcate/reducer';
import details from './details/reducer';
import cart from './cart/reducer';

const reducer = combineReducers({
  home,
  classify,
  user,
  subcate,
  details,
  cart
});

export default reducer;

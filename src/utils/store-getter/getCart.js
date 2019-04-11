import actionCreators from 'store/cart/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const getCart = UIComponent => {
  return connect(
    state => state.cart,
    dispatch => {
      return bindActionCreators(actionCreators, dispatch);
    }
  )(UIComponent);
};

export default getCart;

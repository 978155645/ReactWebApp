import actionCreators from 'store/details/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const getShopInfo = UIComponent => {
  return connect(
    state => state.details,
    dispatch => {
      return bindActionCreators(actionCreators, dispatch);
    }
  )(UIComponent);
};

export default getShopInfo;

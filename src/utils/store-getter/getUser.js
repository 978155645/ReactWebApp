import actionCreators from 'store/user/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const getUser = UIComponent => {
  return connect(
    state => state.user,
    dispatch => {
      return bindActionCreators(actionCreators, dispatch);
    }
  )(UIComponent);
};

export default getUser;

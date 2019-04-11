import actionCreators from 'store/classify/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const getClassify = UIComponent => {
  return connect(
    state => state.classify,
    dispatch => {
      return bindActionCreators(actionCreators, dispatch);
    }
  )(UIComponent);
};

export default getClassify;

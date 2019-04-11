import actionCreators from 'store/subcate/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const getSubcateList = UIComponent => {
  return connect(
    state => state.subcate,
    dispatch => {
      return bindActionCreators(actionCreators, dispatch);
    }
  )(UIComponent);
};

export default getSubcateList;

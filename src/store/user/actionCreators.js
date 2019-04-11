import * as type from './type';

const actionCreators = {
  saveUser(username, password) {
    return dispatch => {
      let action = {
        type: type.SAVE_USER,
        payload: {
          username,
          password
        }
      };
      dispatch(action);
    };
  }
};

export default actionCreators;

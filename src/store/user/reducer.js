import state from './state';
import * as type from './type';

const reducer = (previousState = state, action) => {
  let new_state = { ...previousState };
  switch (action.type) {
    case type.SAVE_USER:
      new_state.username = action.payload.username;
      new_state.password = action.payload.password;
      localStorage.setItem('username', JSON.stringify(action.payload.username));
      break;
    default:
      break;
  }
  return new_state;
};

export default reducer;

import { GET_USERID, RESET_USERID } from "../actions/userId.action";

const initialState = {};

const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERID:
      return action.payload;
    case RESET_USERID:
      return initialState;
    default:
      return state;
  }
};

export default userIdReducer;

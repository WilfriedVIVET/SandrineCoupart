import { GET_USERID } from "../actions/userId.action";

const initialState = {};

const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERID:
      return action.payload;
    default:
      return state;
  }
};

export default userIdReducer;

import UserActions from "../actions/userAction";
import newUser from "../newUser";
import RootState from "../state/RootState";
import UserState from "../state/UserState";

export const initialState: RootState = {
  userReducer: {
    users: newUser,
  },
};

const userReducer = (
  state: UserState = initialState.userReducer,
  action: UserActions,
): UserState => {
  switch (action.type) {
    case "LOAD_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "RESET_USERS":
      return initialState.userReducer;
    default:
      return state;
  }
};

export default userReducer;

import UserActions from "../actions/userAction";

const resetUser = (): UserActions => ({
  type: "RESET_USERS",
});

export default resetUser;

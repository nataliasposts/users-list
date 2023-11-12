import UserActions from "../actions/userAction";

const deleteUser = (userId: number): UserActions => ({
  type: "DELETE_USER",
  payload: userId,
});

export default deleteUser;

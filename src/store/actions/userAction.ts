import UserDto from "../../types/UserDto";

interface LoadUsersAction {
  type: "LOAD_USERS";
  payload: UserDto[];
}

interface DeleteUserAction {
  type: "DELETE_USER";
  payload: number;
}

interface ResetUserAction {
  type: "RESET_USERS";
}

type UserActions = LoadUsersAction | DeleteUserAction | ResetUserAction;

export default UserActions;

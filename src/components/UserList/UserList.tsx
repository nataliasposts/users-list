import { useDispatch } from "react-redux";
import UserDto from "../../types/UserDto";
import TextEnum from "../../types/enums/TextEnum";
import HighlightMatch from "../helpers/HighlightMatch";
import deleteUser from "../../store/selectors/deleteUser";
import "./UserList.scss";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

type UserComponentProps = {
  users: UserDto[];
  searchTerm: string;
};

const UserList: React.FC<UserComponentProps> = ({ users, searchTerm }) => {
  if (!users) return null;
  const [selectedUser, setSelectedUser] = useState<UserDto | null>(null);
  const dispatch = useDispatch();

  const handleDeleteUser = (userId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(deleteUser(userId));
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <ul className="user-list">
      {users.length > 0 ? (
        users.map((user) => (
          <li
            key={user.id}
            className="user"
            onClick={() => setSelectedUser(user)}
          >
            <div className="user-info_row">
              <p className="user-info-name">
                <HighlightMatch text={user.name} query={searchTerm} />
              </p>
              <p className="user-info_text">
                <HighlightMatch text={user.username} query={searchTerm} />
              </p>
              <p className="user-info_text">
                <HighlightMatch text={user.email} query={searchTerm} />
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={(event) => handleDeleteUser(user.id, event)}
                className="button-delete"
              >
                <p>{TextEnum.DELETE_BUTTON}</p>
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="no-user">{TextEnum.NO_USERS}</li>
      )}
      {selectedUser ? (
        <ModalWindow onClose={handleCloseModal} user={selectedUser} />
      ) : null}
    </ul>
  );
};

export default UserList;

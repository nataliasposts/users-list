import { useDispatch, useSelector } from "react-redux";
import RootState from "../store/state/RootState";
import Search from "../components/Search/Search";
import { useState } from "react";
import UserList from "../components/UserList/UserList";
import TextEnum from "../types/enums/TextEnum";
import resetUser from "../store/selectors/resetUsers";
import "./MainPage.scss";

const MainPage: React.FC = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.userReducer.users);

  const filteredUsers = searchItem
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchItem.toLowerCase()) ||
          user.username.toLowerCase().includes(searchItem.toLowerCase()) ||
          user.email.toLowerCase().includes(searchItem.toLowerCase()),
      )
    : users;

  const handleReset = () => {
    setSearchItem("");
    dispatch(resetUser());
  };

  return (
    <main>
      <div className="container main-container">
        <Search searchTerm={searchItem} onSearchChange={setSearchItem} />
        <button type="button" onClick={handleReset} className="reset-button">
          <p>{TextEnum.RESET_BUTTON}</p>
        </button>
        <UserList users={filteredUsers} searchTerm={searchItem} />
      </div>
    </main>
  );
};

export default MainPage;

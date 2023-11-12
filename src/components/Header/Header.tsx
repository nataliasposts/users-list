import TextEnum from "../../types/enums/TextEnum";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <p className="header-text">{TextEnum.HEADER_TEXT}</p>
      </div>
    </header>
  );
};

export default Header;

import TextEnum from "../../types/enums/TextEnum";
import "./Search.scss";

type SearchProps = {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder={TextEnum.PLACEHOLDER}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default Search;

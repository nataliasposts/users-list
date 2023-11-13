import "./HighlightMatch.scss";

type HighlightMatchProps = {
  text: string;
  query: string;
};

const HighlightMatch: React.FC<HighlightMatchProps> = ({ text, query }) => {
  if (!text) return null;

  if (!query) {
    return <span>{text}</span>;
  }

  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) {
    return <span>{text}</span>;
  }

  const beforeMatch = text.substring(0, index);
  const match = text.substring(index, index + query.length);
  const afterMatch = text.substring(index + query.length);

  return (
    <span>
      {beforeMatch}
      <span className="match">{match}</span>
      {afterMatch}
    </span>
  );
};

export default HighlightMatch;

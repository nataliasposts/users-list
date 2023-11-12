import TextEnum from "../../types/enums/TextEnum";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container footer-container">
        <p className="footer-text">{TextEnum.FOOTER_TEXT}</p>
      </div>
    </footer>
  );
};

export default Footer;

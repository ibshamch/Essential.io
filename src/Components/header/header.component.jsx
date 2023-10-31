import { ReactComponent as Favicon } from "../../assets/logo-waveform-svgrepo-com.svg";
import { ReactComponent as MenuBar } from "../../assets/menu-bottom-left-svgrepo-com.svg";
import "./header.styles.scss";
const Header = ({ navLinks }) => {
  return (
    <header className="header">
      <div className="favicon">
        <Favicon className="favicon-img" />
        <h3>/hello@essential</h3>
      </div>
      <div className="navigation-list">
        {navLinks.map((link) => {
          return <div>{link}</div>;
        })}
      </div>
      <div className="header-buttons">
        <h3>FAQ</h3>
        <button className="header-btn-download">Download API</button>
        <MenuBar className="menu-bar" />
      </div>
    </header>
  );
};

export default Header;

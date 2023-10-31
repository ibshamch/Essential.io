import { Link } from "react-router-dom";

const NavigationLink = ({ link, name }) => {
  return (
    <Link to={link} className="link">
      {name}
    </Link>
  );
};

export default NavigationLink;

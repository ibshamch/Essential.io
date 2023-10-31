import Header from "../../Components/header/header.component";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
const HeaderNavigation = ({ navLinks }) => {
  return (
    <Fragment>
      <Header navLinks={navLinks} />
      <Outlet />
    </Fragment>
  );
};
export default HeaderNavigation;

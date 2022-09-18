import React from "react";
import { Link } from "react-router-dom";
import { ContainerMini, LogoHeader } from "../../Component";
import "../../Main.scss";
const Header = () => {
  return (
    <div className="header pt-4">
      <ContainerMini>
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="logo">
                <Link to="/">
                   <LogoHeader>DOMAINFINDER</LogoHeader>
                </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <nav className="right-side">
              <ul className="d-flex list-unstyled">
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">For Developers</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </ContainerMini>
    </div>
  );
};

export default Header;

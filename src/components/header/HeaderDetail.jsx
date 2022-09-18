import React from "react";
import { Link } from "react-router-dom";
import { ContainerMini, LogoHeader2 } from "../../Component";
import InputSearch from "../elements/InputSearch";

const HeaderDetail = () => {
  return (
    <div className="header header-green pt-4 pb-5">
      <ContainerMini>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-2 col-md-2 col-sm-6">
            <div className="logo">
              <Link to="/">
                <LogoHeader2>DEMAINFINDER</LogoHeader2>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <InputSearch
              background={"background"}
              colorS={"white"}
              iconColor={"white"}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <nav className="right-side">
              <ul className="d-flex list-unstyled">
                <li>
                  <Link style={{color:"white"}} to="#">About</Link>
                </li>
                <li>
                  <Link style={{color:"white"}} to="#">For Developers</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </ContainerMini>
    </div>
  );
};

export default HeaderDetail;

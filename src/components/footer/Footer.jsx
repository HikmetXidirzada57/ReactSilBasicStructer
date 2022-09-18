import React from "react";
import { ContainerMini } from "../../Component";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer p-4">
      <ContainerMini>
        <div className="row justify-content-between alogn-items-center">
          <div className="col-lg-9">
            <div className="d-flex flex-wrap">
              <div className="left-side">
                <FacebookRoundedIcon sx={{ color: "blue"}} className="mx-2"/>
                <TwitterIcon sx={{ color: "green" }}  className="mx-2" />
                <LinkedInIcon sx={{ color: "blue" }} className="mx-2" />
              </div>
              <div className="left-side">
                <ul className="list-unstyled p-0 d-flex">
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Trust & Safety</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex">
              <label> Language :</label>
              <select name="language"  className="select-alnguage form-control">
                <option defaultChecked value="">EN</option>
                <option value="">AZ</option>
              </select>
             
            </div>
          </div>
        </div>
      </ContainerMini>
    </div>
  );
};

export default Footer;

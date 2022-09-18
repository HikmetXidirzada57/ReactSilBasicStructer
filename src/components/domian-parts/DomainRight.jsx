import React from "react";
import { Images } from "../../Images.js";
const DomainRight = () => {
  return (
    <div className="col-lg-6">
      <div className="photoUrl p-3">
        <div className="image">
          <img className="img-fluid" src={Images.domainImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DomainRight;

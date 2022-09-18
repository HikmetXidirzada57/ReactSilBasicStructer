import React from "react";
import Adobefull from "../adobe-full/Adobefull";
import DetailsTab from "../details-tab/DetailsTab";
import Registrar from "../domain-registrar/Registrar";

const LeftSide = () => {
  return (
    <div className="left-detail">
      <Adobefull />
      <Registrar />
      <DetailsTab />
    </div>
  );
};

export default LeftSide;

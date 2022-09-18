import React from "react";
import { DetailsTitle } from "../../Component";
import Tab from "../elements/Tab";

const DetailsTab = (props) => {
  return (
    <div className=" detail-tab pt-5 pb-5">
      <DetailsTitle className="tab-title mb-4">Who is</DetailsTitle>
      <Tab
        tabname={"Domain Information"}
        tabName2={"Registrant Contact"}
        tabName3={"Adminstrative Contact"}
        tabName4={"Adminstrative Contract"}
      />
    </div>
  );
};

export default DetailsTab;

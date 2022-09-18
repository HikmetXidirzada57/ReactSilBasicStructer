import React from "react";
import { DetailsTitle } from "../../Component";
import Adobefull from "../adobe-full/Adobefull";
import AdobeText from "../adobe-text/AdobeText";
import Adobe from "../adobe/Adobe";
import TopSearches from "../top-searches/TopSearches";

const Similar = () => {
  return (
    <div className="pt-5 pb-5">
      <DetailsTitle>Similar Content</DetailsTitle>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="similar">
            <Adobe col1={"col-lg-6"} col2={"col-lg-9"} />
            <AdobeText />
            <TopSearches
              className={"d-flex-justify-content-start"}
              visibility={"d-none"}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="similar">
            <Adobe col1={"col-lg-6"} col2={"col-lg-9"} />
            <AdobeText />
            <TopSearches
              className={"d-flex-justify-content-start"}
              visibility={"d-none"}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="similar">
            <Adobe col1={"col-lg-6"} col2={"col-lg-9"} />
            <AdobeText />
            <TopSearches
              className={"d-flex-justify-content-start"}
              visibility={"d-none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Similar;

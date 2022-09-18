import React from "react";
import { SearcsTitle } from "../../Component";
import TopSearches from "../top-searches/TopSearches";

const RightSide = () => {
  return (
    <div>
      <div className="box">
        <SearcsTitle>Tags</SearcsTitle>
        <TopSearches
          className={"d-flex-justify-content-start"}
          visibility={"d-none"}
        />
      </div>
      <div className="box">
        <SearcsTitle>Company Sectors</SearcsTitle>

        <TopSearches
          className={"d-flex-justify-content-start"}
          visibility={"d-none"}
        />
      </div>
      <div className="box">
        <SearcsTitle>Colors</SearcsTitle>

        <TopSearches
          className={"d-flex-justify-content-start"}
          visibility={"d-none"}
        />
      </div>
    </div>
  );
};

export default RightSide;

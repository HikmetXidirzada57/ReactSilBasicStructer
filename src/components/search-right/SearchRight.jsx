import React from "react";
import Adobefull from "../adobe-full/Adobefull";
const SearchRight = () => {
  return (
    <div className="search-right-zone">
      <div className="d-flex justify-content-between pt-4">
        <div className="left">
          <p>Showing: 599 filtered domains</p>
        </div>
        <div className="right">
          <p>
            Sort by : <span className="rev">Revelance</span>
          </p>
        </div>
      </div>
      <div className="down-side">
        <Adobefull/>
        <Adobefull/>
        <Adobefull/>
        <Adobefull/>
      </div>
    </div>
  );
};

export default SearchRight;

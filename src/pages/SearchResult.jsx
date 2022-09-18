import React from "react";
import { ContainerMini } from "../Component";
import SearchLeft from "../components/search-left/SearchLeft";
import SearchRight from "../components/search-right/SearchRight";

const SearchResult = (props) => {
  return (
    <div className="pt-3">
      <ContainerMini>
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <SearchLeft />
          </div>
          <div className="col-lg-9">
            <SearchRight />
          </div>
        </div>
      </ContainerMini>
    </div>
  );
};

export default SearchResult;

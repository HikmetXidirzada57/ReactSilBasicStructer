import React from "react";
import { DomainTitle, ExtraContainerMini } from "../../Component";
import "../../Main.scss";
import TopSearches from "../top-searches/TopSearches";
import InputSearch from "../elements/InputSearch";
const Domain = () => {
  return (
    <div className="main-domin">
      <ExtraContainerMini>
        <div className="my-input-context">
          <DomainTitle>Use Domain Finder to find unique domains!</DomainTitle>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum
            modi quis quia ullam laudantium perferendis magnam, tenetur optio
            doloribus.
          </p>
        </div>
       <InputSearch color={"black"}/>
         <TopSearches className={'d-flex justify-content-center'} visibility={"d-block"}/>
      </ExtraContainerMini>
    </div>
  );
};

export default Domain;

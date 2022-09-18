import React from "react";
import { ContainerMini } from "../Component";
import LeftSide from "../components/detail-left/LeftSide";
import RightSide from "../components/detail-right/RightSide";
import HeaderDetail from "../components/header/HeaderDetail";
import Similar from "../components/similar-content/Similar";

const DetailPage = (props) => {
  return (
    <div className="detail">
      <ContainerMini>
        <div className="detail-page">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <LeftSide />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <RightSide />
            </div>
          </div>

          <Similar />
        </div>
      </ContainerMini>
    </div>
  );
};

export default DetailPage;

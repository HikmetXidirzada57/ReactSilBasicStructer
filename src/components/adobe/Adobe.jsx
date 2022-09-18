import React from "react";
import { Images } from "../../Images";

const Adobe = ({col1,col2}) => {
  return (
    <div className="adobe p-4">
      <div className="row justify-content-between align-items-center">
        <div className={`${col1}`}>
          <div className="adobe-logo">
            <div className="d-flex align-items-center">
              <img className="img-fluid" src={Images.adobeImg} alt="" />
            </div>
            <a className="feed-back" href="#">https://www.adobe.com</a>
          </div>
        </div>
        <div className={`${col2}`}>
            <div className="d-flex flex-wrap align-items-center">
            <div className="a-logo">
            <img className="img-fluid" src={Images.aLogo} alt="" />
          </div>
          <div className="rate">
            <span className="my-rate">3.5</span>
            <p>Local rating</p>
          </div>
          <div className="rate">
            <span className="my-rate">5.0</span>
            <p>Local rating</p>
          </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Adobe;

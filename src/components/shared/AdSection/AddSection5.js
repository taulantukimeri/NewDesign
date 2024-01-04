import React from "react";
import world from "../../../assets/icons/Mask Group 2.png";
import "../../../styles/AdSection/AddSection5.scss";
import minimumpay from "../../../assets/icons/minimumpay.svg";
import highecp from "../../../assets/icons/highecp.svg";
import detailed from "../../../assets/icons/detailed.svg";
import fillrate from "../../../assets/icons/rate.svg";

function AddSection5(prop) {
  return (
    <div className="add-main5">
      <div className="world">
        <img src={world} />
      </div>

      <div className="add-main5-header">
        <h1>We reach up to a billion people globally each month.</h1>
      </div>

      <div className="add-main5-banner">
        <div className="add-main5-upper-banner">
          <div className="minimum">
            <img src={minimumpay} />
            <p>Minimum Payment Hold</p>
          </div>
          <div className="high-ecpm">
            <img src={highecp} />
            <p>High ECPMs On 240+ Countries</p>
          </div>
        </div>
        <div className="add-main5-lower-banner">
          <div className="detailed">
            <img src={detailed} />
            <p>Detailed Statistics For Your Site</p>
          </div>
          <div className="rate">
            <img src={fillrate} />
            <p>100% Fill Rate</p>
          </div>
        </div>
        <div className="active-publisher">
          <p><span>2000+ </span>Active Publishers</p>
        </div>
      </div>
    </div>
  );
}

export default AddSection5;

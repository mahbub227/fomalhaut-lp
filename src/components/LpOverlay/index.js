import React, { useState } from "react";
import { scrollDown, logo, bgLogo } from "../../assets/globalAssets";
import "./lpOverlay.scss";
import { SCROLL, SUB_TITLE, TOP_QA } from "../../localization/common.json";

const LpOverlay = () => {
  const [tab, setTab] = useState(0);
  const tabs = TOP_QA.map((data, index) => (
    <span className={tab === index && "selected"} onClick={() => setTab(index)}>
      {data.Q}
    </span>
  ));

  const details = TOP_QA.map((data, index) => (
    <div className={tab === index && "show"}>{data.A}</div>
  ));
  return (
    <div className="lp-overlay">
      <div className="name-block">
        <img
          src={logo.default}
          height="150px"
          className="logo"
          alt="fomalhaut"
        />
        <img src={bgLogo.default} className="logo-bg" alt="fomalhaut" />
        <p>{SUB_TITLE}</p>
      </div>
      <div class="scroll-to-bottom-block">
        <img src={scrollDown.default} height="40px" alt="scroll" />
        <p>{SCROLL}</p>
        <span></span>
      </div>
      <div class="option-block">{tabs}</div>
      <div className="details-block">
        {details}
        <div className="relative-div">{TOP_QA[tab].A}</div>
      </div>
    </div>
  );
};

export default LpOverlay;

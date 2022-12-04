import React from 'react';
import getScreenshotOfElement from "../utils/getScreenshotOfElement.js";
import "./ExportButton.css"

const ExportButton = ({layoutRef}) => {

  const exportImg = () => {
    getScreenshotOfElement(layoutRef.current);
  }

  return (<div onClick={exportImg} className="ExportButton">Export</div>);
};

export default ExportButton;

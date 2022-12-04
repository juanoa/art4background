import React from 'react';
import getScreenshotOfElement from "../utils/getScreenshotOfElement.js";

const ExportButton = ({layoutRef}) => {

  const exportImg = () => {
    getScreenshotOfElement(layoutRef.current);
  }

  return (<button onClick={exportImg}>Export</button>);
};

export default ExportButton;

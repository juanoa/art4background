import React, {useEffect, useRef, useState} from 'react';
import convertRgbToStyle from "../utils/convertRgbToStyle.js";
import getAverageColorFromImage from "../utils/getAverageColorFromImage.js";

const ImageResult = ({image, resultRef}) => {

  const [rgbColor, setRgbColor] = useState({})
  const imgRef = useRef();

  useEffect(() => {
    const rgb = getAverageColorFromImage(imgRef.current)
    setRgbColor(rgb)
  }, [image])

  return (
    <div style={{background: convertRgbToStyle(rgbColor)}} className="app_layout" ref={resultRef}>
      <img ref={imgRef} src={image} alt="Image Uploaded" />
    </div>
  );
};

export default ImageResult;

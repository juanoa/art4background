import './App.css'
import ImageInput from "./components/ImageInput.jsx";
import {useEffect, useRef, useState} from "react";
import getAverageColorFromImage from "./utils/getAverageColorFromImage.js";
import convertRgbToStyle from "./utils/convertRgbToStyle.js";
import getScreenshotOfElement from "./utils/getScreenshotOfElement.js";

function App() {

  const [image, setImage] = useState()
  const [rgbColor, setRgbColor] = useState({})
  const imgRef = useRef();
  const layoutRef = useRef();

  useEffect(() => {
    const rgb = getAverageColorFromImage(imgRef.current)
    setRgbColor(rgb)
  }, [image])

  const exportImg = () => {
    getScreenshotOfElement(layoutRef.current);
  }


  return (
    <div className="app">
      <h1>Art4Background</h1>
      <ImageInput setImage={setImage} />
      <div style={{background: convertRgbToStyle(rgbColor)}} className="app_layout" ref={layoutRef}>
        <img ref={imgRef} src={image} alt="Image Uploaded" />
      </div>
      <button onClick={exportImg}>Export</button>
    </div>
  )
}

export default App

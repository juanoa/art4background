import './App.css'
import ImageInput from "./components/ImageInput.jsx";
import {useEffect, useRef, useState} from "react";
import getAverageColorFromImage from "./utils/getAverageColorFromImage.js";
import convertRgbToStyle from "./utils/convertRgbToStyle.js";
import getScreenshotOfElement from "./utils/getScreenshotOfElement.js";
import ImageResult from "./components/ImageResult.jsx";

function App() {

  const [image, setImage] = useState()
  const layoutRef = useRef();



  const exportImg = () => {
    getScreenshotOfElement(layoutRef.current);
  }


  return (
    <div className="app">
      <h1>Art4Background</h1>
      <ImageInput setImage={setImage} />
      <ImageResult image={image} resultRef={layoutRef} />
      <button onClick={exportImg}>Export</button>
    </div>
  )
}

export default App

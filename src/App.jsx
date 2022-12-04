import './App.css'
import ImageInput from "./components/ImageInput.jsx";
import {useRef, useState} from "react";
import ImageResult from "./components/ImageResult.jsx";
import ExportButton from "./components/ExportButton.jsx";

function App() {

  const [image, setImage] = useState()
  const layoutRef = useRef();

  return (
    <div className="app">
      <h1>Art4Background</h1>
      <ImageInput setImage={setImage}/>
      {
        image && (
          <>
            <ImageResult image={image} resultRef={layoutRef}/>
            <ExportButton layoutRef={layoutRef}/>
          </>
        )
      }
    </div>
  )
}

export default App

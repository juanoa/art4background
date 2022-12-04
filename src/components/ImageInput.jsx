import React from 'react';
import "./ImageInput.css"

const ImageInput = ({setImage}) => {

  const onChange = (e) => {
    const file = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(reader.result)
    };
  }

  return (
    <div>
      <input type="file" name="file" id="file" className="ImageInput" onChange={onChange}/>
      <label htmlFor="file">Choose an image</label>
    </div>
  );
};

export default ImageInput;

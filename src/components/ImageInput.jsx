import React from 'react';

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
    <input type="file" onChange={onChange}/>
  );
};

export default ImageInput;

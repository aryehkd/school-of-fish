import React, { FunctionComponent, useState } from 'react'

// @ts-ignore
export interface ImageUploadProps {}

export const ImageUpload: FunctionComponent<ImageUploadProps> = (props) => {
  const [ image, setImage ] = useState(null)

  const onFileChange = event => {
    setImage(event.target.files[0]);
  };

  const onFileUpload = () => {
    console.log(image);
  };

  return (
    <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>
          Upload!
        </button>
    </div>
  )
}

export default ImageUpload

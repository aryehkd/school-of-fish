import React, { FunctionComponent, useState } from 'react'
import useImageUpload from '../../hooks'

// @ts-ignore
export interface ImageUploadProps {}

export const ImageUpload: FunctionComponent<ImageUploadProps> = (props) => {
  const { saveImage, submitImage} = useImageUpload()

  return (
    <div>
        <input type="file" onChange={saveImage} />
        <button onClick={submitImage}>
          Upload!
        </button>
    </div>
  )
}

export default ImageUpload

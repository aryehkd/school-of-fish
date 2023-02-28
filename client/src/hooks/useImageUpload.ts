import { useState } from 'react'

const useImageUpload = () => {
    const [ image, setImage ] = useState('')

    const saveImage = event => {
        setImage(event.target.files[0])
    }

    const submitImage = () => {
        console.log('image', image)
    }

    return {
        saveImage, 
        submitImage
    }
}

export default useImageUpload
import { useState } from 'react'
import axios from 'axios'

const useImageUpload = () => {
    const [ image, setImage ] = useState('')

    const saveImage = event => {
        setImage(event.target.files[0])
        
    }

    const submitImage = () => {
        const data = new FormData();
        data.append('file', image);

        try {
            axios.post('http://localhost:5000/upload', data).then((res) => {})
        } catch (e) {
            console.error(e)
        }
    }

    return {
        saveImage, 
        submitImage
    }
}

export default useImageUpload
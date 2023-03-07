import { useState, useEffect } from 'react'
import axios from 'axios'

const useStoredNotes = () => {
    const [ notes, setNotes ] = useState<any[]>([])

    const getNotes = () => {
        try {
            axios.get('http://localhost:5000/notes').then((res) => {
                console.log(res)
                setNotes(res.data.data)
            })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getNotes()
    }, [])

    return {
        notes,
        getNotes
    }
}

export default useStoredNotes
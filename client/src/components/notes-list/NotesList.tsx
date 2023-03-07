import React, { FunctionComponent } from 'react'
import { useStoredNotes } from '../../hooks'
import NoteCard from '../note-card'

import { Box } from '@mui/material'

// @ts-ignore
export interface NotesListProps {}

export const NotesList: FunctionComponent<NotesListProps> = (props) => {
  const { notes } = useStoredNotes()



  return (
    <Box>
        <Box sx={{margin: '20px'}}>
          {notes.map(note => (
            <NoteCard noteText={note?.body} />
          ))}
        </Box>
    </Box>
  )
}

export default NotesList

import React, { FunctionComponent } from 'react'
import { useStoredNotes } from '../../hooks'

// @ts-ignore
export interface NotesListProps {}

export const NotesList: FunctionComponent<NotesListProps> = (props) => {
  const { notes, getNotes } = useStoredNotes()

  return (
    <div>
        <button onClick={getNotes}>
          refresh
        </button>
        {notes.map(note => (
          <p>
            {note?.body}
          </p>
        ))}
    </div>
  )
}

export default NotesList

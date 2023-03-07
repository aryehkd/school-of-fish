import React, { FunctionComponent } from 'react'
import { Box, Typography } from '@mui/material'

// @ts-ignore
export interface NoteCardProps {
  noteText: string
}

export const NoteCard: FunctionComponent<NoteCardProps> = (props) => {
  const { noteText } = props

  return (
    <Box sx={{
        display: 'flex', 
        width: '350px', // TODO: make this responsive / percentage based with min-width
        padding: '20px',
        marginBottom: '20px',
        flexDirection: 'column', 
        border: 1, 
        borderColor: 'black' 
      }}
    >
      <Typography>{noteText}</Typography>
    </Box>
  )
}

export default NoteCard

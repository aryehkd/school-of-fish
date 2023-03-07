import React from 'react'
import { render } from '@testing-library/react'
import NoteCard from '.'

describe('NoteCard', () => {
  it('should render the NoteCard component', () => {
    const props = {} as any
    const { container } = render(<NoteCard { ...props } />)
    expect(container).toBeTruthy()
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import NotesList from '.'

describe('NotesList', () => {
  it('should render the NotesList component', () => {
    const props = {} as any
    const { container } = render(<NotesList { ...props } />)
    expect(container).toBeTruthy()
  })
})

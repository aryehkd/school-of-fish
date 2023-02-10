import React from 'react'
import { render } from '@testing-library/react'
import ImageUpload from '.'

describe('ImageUpload', () => {
  it('should render the ImageUpload component', () => {
    const props = {} as any
    const { container } = render(<ImageUpload { ...props } />)
    expect(container).toBeTruthy()
  })
})

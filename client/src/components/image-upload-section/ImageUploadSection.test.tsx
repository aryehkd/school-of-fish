import React from 'react'
import { render } from '@testing-library/react'
import ImageUploadSection from '.'

describe('ImageUploadSection', () => {
  it('should render the ImageUploadSection component', () => {
    const props = {} as any
    const { container } = render(<ImageUploadSection { ...props } />)
    expect(container).toBeTruthy()
  })
})

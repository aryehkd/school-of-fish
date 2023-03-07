import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0"
import { ImageUploadSection as Component } from "./ImageUploadSection"

const storybookContainerStyle = {
  padding: '2em'
}

export default {
  title: "ImageUploadSection",
  component: Component,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={storybookContainerStyle}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<any> = (args) => <Component {...args} />

export const ImageUploadSection = Template.bind({})
ImageUploadSection.args = {}

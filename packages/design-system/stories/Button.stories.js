import React from 'react'

import { Button } from './Button'

export default {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  component: Button,
  title: 'Example/Button'
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  primary: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  label: 'Button',
  size: 'large'
}

export const Small = Template.bind({})
Small.args = {
  label: 'Button',
  size: 'small'
}

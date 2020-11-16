import React from 'react'

import { Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'

export default {
  title: 'Material/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  variant: 'contained',
  children: 'Button',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Button',
  endIcon: <ArrowForward />,
}

import React from 'react'
import { Typography } from '@material-ui/core'

export default {
  title: 'Material/Typography',
  component: Typography,
  argTypes: {},
}

const Template = () => (
  <>
    <Typography variant="h1">Heading h1</Typography>
    <Typography variant="h2">Heading h2</Typography>
    <Typography variant="h3">Heading h3</Typography>
    <Typography variant="h4">Heading h4</Typography>
    <Typography variant="h5">Heading h5</Typography>
    <Typography variant="h6">Heading h6</Typography>
    <Typography variant="subtitle1">subtitle1</Typography>
    <Typography variant="subtitle2">subtitle2</Typography>
    <Typography variant="body1">body1</Typography>
    <Typography variant="body2">body2</Typography>
    <div>
      <Typography variant="caption">caption</Typography>
    </div>
    <div>
      <Typography variant="button">button</Typography>
    </div>
    <div>
      <Typography variant="overline">overline</Typography>
    </div>
    <div>
      <Typography variant="srOnly">srOnly</Typography>
    </div>
    <div>
      <Typography variant="inherit">inherit</Typography>
    </div>
  </>
)

export const Texts = Template.bind({})
Texts.args = {}

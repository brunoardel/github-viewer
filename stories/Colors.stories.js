import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  white: {
    background: theme.palette.white,
  },
  black: {
    background: theme.palette.black,
  },
  icon: {
    background: theme.palette.icon,
  },
  divider: {
    background: theme.palette.divider,
  },
  greenLight: {
    background: theme.palette.green.light,
  },
  greenDark: {
    background: theme.palette.green.dark,
  },
  primaryContrastText: {
    background: theme.palette.primary.contrastText,
  },
  primaryDark: {
    background: theme.palette.primary.dark,
  },
  primaryMain: {
    background: theme.palette.primary.main,
  },
  primaryLight: {
    background: theme.palette.primary.light,
  },
  secondaryContrastText: {
    background: theme.palette.secondary.contrastText,
  },
  secondaryDark: {
    background: theme.palette.secondary.dark,
  },
  secondaryMain: {
    background: theme.palette.secondary.main,
  },
  secondaryLight: {
    background: theme.palette.secondary.light,
  },
  successContrastText: {
    background: theme.palette.success.contrastText,
  },
  successDark: {
    background: theme.palette.success.dark,
  },
  successMain: {
    background: theme.palette.success.main,
  },
  successLight: {
    background: theme.palette.success.light,
  },
  infoContrastText: {
    background: theme.palette.info.contrastText,
  },
  infoDark: {
    background: theme.palette.info.dark,
  },
  infoMain: {
    background: theme.palette.info.main,
  },
  infoLight: {
    background: theme.palette.info.light,
  },
  warningContrastText: {
    background: theme.palette.warning.contrastText,
  },
  warningDark: {
    background: theme.palette.warning.dark,
  },
  warningMain: {
    background: theme.palette.warning.main,
  },
  warningLight: {
    background: theme.palette.warning.light,
  },
  disabledContrastText: {
    background: theme.palette.disabled.contrastText,
  },
  disabledDark: {
    background: theme.palette.disabled.dark,
  },
  disabledMain: {
    background: theme.palette.disabled.main,
  },
  disabledLight: {
    background: theme.palette.disabled.light,
  },
  errorContrastText: {
    background: theme.palette.error.contrastText,
  },
  errorDark: {
    background: theme.palette.error.dark,
  },
  errorMain: {
    background: theme.palette.error.main,
  },
  errorLight: {
    background: theme.palette.error.light,
  },
  greyContrastText: {
    background: theme.palette.grey.contrastText,
  },
  greyDark: {
    background: theme.palette.grey.dark,
  },
  greyMain: {
    background: theme.palette.grey.main,
  },
  greyLight: {
    background: theme.palette.grey.light,
  },
  textPrimary: {
    background: theme.palette.text.primary,
  },
  textSecondary: {
    background: theme.palette.text.secondary,
  },
  textLink: {
    background: theme.palette.text.link,
  },
  backgroundDefault: {
    background: theme.palette.background.default,
  },
  backgroundLight: {
    background: theme.palette.background.light,
  },
  backgroundPaper: {
    background: theme.palette.background.paper,
  },
  backgroundTable: {
    background: theme.palette.background.table,
  },
}))

function Colors() {
  const classes = useStyles()
  return (
    <div>
      <h2 style={{ marginBottom: 0 }}>General</h2>
      <div style={{ display: 'flex' }}>
        <Block name="white" className={classes.white}></Block>
        <Block name="black" className={classes.black}></Block>
        <Block name="icon" className={classes.icon}></Block>
        <Block name="divider" className={classes.divider}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Primary</h2>
      <div style={{ display: 'flex' }}>
        <Block name="contrast" className={classes.primaryContrastText}></Block>
        <Block name="dark" className={classes.primaryDark}></Block>
        <Block name="main" className={classes.primaryMain}></Block>
        <Block name="light" className={classes.primaryLight}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Secondary</h2>
      <div style={{ display: 'flex' }}>
        <Block
          name="contrast"
          className={classes.secondaryContrastText}
        ></Block>
        <Block name="dark" className={classes.secondaryDark}></Block>
        <Block name="main" className={classes.secondaryMain}></Block>
        <Block name="light" className={classes.secondaryLight}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Background</h2>
      <div style={{ display: 'flex' }}>
        <Block name="default" className={classes.backgroundDefault}></Block>
        <Block name="light" className={classes.backgroundLight}></Block>
        <Block name="paper" className={classes.backgroundPaper}></Block>
        <Block name="table" className={classes.backgroundTable}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Text</h2>
      <div style={{ display: 'flex' }}>
        <Block name="primary" className={classes.textPrimary}></Block>
        <Block name="secondary" className={classes.textSecondary}></Block>
        <Block name="link" className={classes.textLink}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Green</h2>
      <div style={{ display: 'flex' }}>
        <Block name="light" className={classes.greenLight}></Block>
        <Block name="dark" className={classes.greenDark}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Grey</h2>
      <div style={{ display: 'flex' }}>
        <Block name="contrast" className={classes.greyContrastText}></Block>
        <Block name="dark" className={classes.greyDark}></Block>
        <Block name="main" className={classes.greyMain}></Block>
        <Block name="light" className={classes.greyLight}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Success</h2>
      <div style={{ display: 'flex' }}>
        <Block name="contrast" className={classes.successContrastText}></Block>
        <Block name="dark" className={classes.successDark}></Block>
        <Block name="main" className={classes.successMain}></Block>
        <Block name="light" className={classes.successLight}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Info</h2>
      <div style={{ display: 'flex' }}>
        <Block name="contrast" className={classes.infoContrastText}></Block>
        <Block name="dark" className={classes.infoDark}></Block>
        <Block name="main" className={classes.infoMain}></Block>
        <Block name="light" className={classes.infoLight}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Warning</h2>
      <div style={{ display: 'flex' }}>
        <Block name="contrast" className={classes.warningContrastText}></Block>
        <Block name="dark" className={classes.warningDark}></Block>
        <Block name="main" className={classes.warningMain}></Block>
        <Block name="light" className={classes.warningLight}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Error</h2>
      <div style={{ display: 'flex' }}>
        <Block name="contrast" className={classes.errorContrastText}></Block>
        <Block name="dark" className={classes.errorDark}></Block>
        <Block name="main" className={classes.errorMain}></Block>
        <Block name="light" className={classes.errorLight}></Block>
      </div>

      <h2 style={{ marginBottom: 0 }}>Disabled</h2>
      <div style={{ display: 'flex' }}>
        <Block name="contrast" className={classes.disabledContrastText}></Block>
        <Block name="dark" className={classes.disabledDark}></Block>
        <Block name="main" className={classes.disabledMain}></Block>
        <Block name="light" className={classes.disabledLight}></Block>
      </div>
    </div>
  )
}

function Block({ name, className }) {
  return (
    <div style={{ textAlign: 'center', width: 60, marginBottom: 16 }}>
      <div
        style={{
          border: '1px solid black',
          width: 60,
          height: 60,
          marginBottom: 6,
        }}
        className={className}
      />
      <p style={{ margin: 0 }}>{name}</p>
    </div>
  )
}

export default {
  title: 'Material/Colors',
  component: Colors,
  argTypes: {},
}

const Template = (args) => <Colors {...args} />

export const Palette = Template.bind({})
Palette.args = {}

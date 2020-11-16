import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
  TypographyLight: {
    color: theme.palette.white,
  },
  TypographyCustom: {
    color: theme.palette.white,
    marginTop: theme.spacing(2),
  },
  MainButtons: {
    marginTop: theme.spacing(6),
  },
  CustomButton: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  Container: {
    width: '100%',
    padding: `0 ${theme.spacing(2)}px`,
  },
  ChartSection: {
    margin: theme.spacing(4, -2),
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(4, 0),
    },
  },
  Chart: {
    margin: theme.spacing(3, 0),
  },
  ChartDisclaimer: {
    display: 'flex',
    marginTop: theme.spacing(6),
  },
}))

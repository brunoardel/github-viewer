import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'OratorStd',
    color: theme.palette.primary.main,
    fontSize: 24,
    marginBottom: 32,
  },
  header: {
    textAlign: 'center',
    marginTop: 0,
    paddingTop: 20,
  },
}))

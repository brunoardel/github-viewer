import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
  repoListContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',

    marginTop: 0,
    width: '100%',
    padding: 10,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: 30,
      width: '100%',
      height: '100%',
    },
  },
}))

import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
  searchButton: {
    width: '90%',
    height: 42,
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 4,
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
  },
}))

import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: theme.spacing(0),
    },
  },
  userInput: {
    width: '90%',
    height: 56,
    fontSize: 18,
    margin: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: 4,
    [theme.breakpoints.up('sm')]: {
      width: 450,
    },
  },
  searchButton: {
    width: '90%',
    height: 56,
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 4,
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
  },
  errorText: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
}))

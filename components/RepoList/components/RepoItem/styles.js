import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
  repoItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',

    background: theme.palette.white,
    padding: '20px',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '3px 3px 10px #ddd',
    textDecoration: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
      width: '27%',
      background: theme.palette.white,
      height: 90,
      padding: 20,
      margin: 10,
      borderRadius: 5,
      boxShadow: '3px 3px 10px #ddd',
      textDecoration: 'none',
    },

    '& > span': {
      fontSize: '14px',
      fontWeight: 'normal',
      color: theme.palette.black,
    },
  },
}))

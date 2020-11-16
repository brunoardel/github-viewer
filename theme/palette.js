import { colors } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const white = '#FFFFFF'
const black = '#000000'

export default {
  black,
  white,
  primary: {
    contrastText: black,
    dark: '#ee7656',
    main: '#ee7656',
    light: '#ecfa84',
  },
  secondary: {
    contrastText: black,
    dark: '#ff6420',
    main: '#ff8200',
    light: '#ff8e5d',
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: '#e0dfda',
    paper: colors.grey[200],
  },

  icon: colors.blueGrey[600],
}

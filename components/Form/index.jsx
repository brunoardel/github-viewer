import React from 'react'
import { useStyles } from './styles'

import TextField from '@material-ui/core/TextField'
import Button from 'components/Button'

const Form = ({ user, loading, error, buttonAction, changeUser }) => {
  const classes = useStyles()

  return (
    <form>
      <div className={classes.formContainer}>
        <TextField
          type="search"
          className={classes.userInput}
          label="Pesquise um usuário ou organização"
          variant="outlined"
          value={user}
          onChange={(e) => changeUser(e.target.value)}
        />
        <Button
          className={classes.searchButton}
          onClick={buttonAction}
          disabled={loading ? true : false}
          label="Buscar"
          type="submit"
        />
      </div>

      {error && <p className={classes.errorText}>{error}</p>}
    </form>
  )
}

export default Form

import { useState } from 'react'
import axios from 'axios'

import Header from 'components/Header'
import Form from 'components/Form'
import RepoList from 'components/RepoList'
import LinearProgress from '@material-ui/core/LinearProgress'

import { useStyles } from './styles'

function App() {
  const classes = useStyles()
  const [user, setUser] = useState('')
  const [repos, setRepos] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function changeUser(user) {
    setUser(user)
  }

  async function searchUser() {
    setLoading(true)

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      )

      console.log(repos)

      setRepos(repos)
      setError('')
      setLoading(false)
    } catch (error) {
      setRepos([])
      setError('Usuário não encontrado')
      setLoading(false)
    }
  }

  return (
    <div className={classes.Wrapper}>
      {loading && <LinearProgress />}

      <Header />
      <Form
        changeUser={changeUser}
        user={user}
        error={error}
        loading={loading}
        buttonAction={searchUser}
      />
      <RepoList repos={repos} />
    </div>
  )
}

export default App

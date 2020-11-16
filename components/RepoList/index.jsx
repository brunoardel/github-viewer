import React from 'react'
import { useStyles } from './styles'

import RepoItem from './components/RepoItem'

const RepoList = ({ repos }) => {
  const classes = useStyles()

  return (
    <div className={classes.repoListContainer}>
      {repos.map((repo, id) => (
        <RepoItem repo={repo} key={id} />
      ))}
    </div>
  )
}

export default RepoList

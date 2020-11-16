import React from 'react';
import { useStyles } from './styles';

const RepoItem = ({ repo }) => {
  const classes = useStyles();

  return (
    <a
      href={repo.html_url}
      key={repo.id}
      className={classes.repoItemContainer}
      target="_blank"
    >
      <span>{repo.name}</span>
      <span>Stars: {repo.stargazers_count}</span>
      <span>Forks: {repo.forks}</span>
      <span>Issues: {repo.open_issues}</span>
    </a>
  );
};

export default RepoItem;

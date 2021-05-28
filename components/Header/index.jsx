import React from 'react'
import Image from 'next/image'

import { useStyles } from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Image
        src="/images/logo.png"
        alt="Github - Logo"
        width={260}
        height={90}
        className={classes.logo}
      />
      <h1 className={classes.title}>Viewer</h1>
    </div>
  )
}

export default Header

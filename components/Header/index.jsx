import React from 'react'
import Image from 'next/image'

import { useStyles } from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Image
        src="/images/logo.png"
        alt="Just For You - Logo"
        width={224}
        height={80}
        className={classes.logo}
      />
      <h1 className={classes.title}>Github Viewer</h1>
    </div>
  )
}

export default Header

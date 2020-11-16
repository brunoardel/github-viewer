import React from 'react'
import Button from '@material-ui/core/Button'
import { useStyles } from './styles'

const ButtonBuy = ({
  color,
  variant,
  className,
  onClick,
  loading,
  label,
  ...props
}) => {
  const classes = useStyles()

  return (
    <Button
      color={color ? color : 'secondary'}
      variant={variant ? variant : 'contained'}
      className={className ? className : classes.searchButton}
      onClick={onClick}
      disabled={loading ? true : false}
      {...props}
    >
      {label}
    </Button>
  )
}
export default ButtonBuy

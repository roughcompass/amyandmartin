import React from 'react'
import { Anchor, ThemeContext } from 'grommet'
import { Link } from 'gatsby'

const EnhancedAnchor = ({ path, label, children, ...rest }) => {
  return (
    <ThemeContext.Extend>
      <Anchor
        path={path}
        label={label || children}
        {...rest}
        as={RoutedAnchor}
      />
    </ThemeContext.Extend>
  )
}

const RoutedAnchor = (props) => {
  const { 
    a11yTitle, alignSelf, color, disabled, gridArea, href, icon, label, margin, reverse, size, 
    onClick, onBlur, onFocus, className, 'aria-label': ariaLabel, to, path,
    children, ...rest
  } = props

  return (
    <Link
      to={to || path}
      aria-label={ariaLabel}
      className={className}
      disabled={disabled}
      href={href}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default EnhancedAnchor
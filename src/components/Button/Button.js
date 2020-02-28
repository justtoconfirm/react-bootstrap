import React from 'react'
import classNames from 'classnames'

const Button = (props) => {
  const {
    type = 'button',
    url = '',
    className = '',
    theme = '',
    isFullWidth = false,
    onClick,
    children
  } = props

  const buttonClass = classNames('btn', className, {
    'btn--primary': theme === 'primary',
    'btn--secondary': theme === 'secondary',
    'btn--full-width': isFullWidth
  })

  const isAnchor = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

  const renderAnchor = () =>
    <a href={url} className={buttonClass} role='button'>{children}</a>

  const renderButton = () =>
    <button {...{ type }} className={buttonClass} onClick={onClick}>{children}</button>

  return (
    isAnchor ? renderAnchor() : renderButton()
  )
}

export default Button

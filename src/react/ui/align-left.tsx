import type { Icon } from './types'

export const IconAlignLeft: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='align-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M16.75 8.02c0-.9 0-1.34-.18-1.68a1.5 1.5 0 0 0-.6-.59c-.33-.19-.78-.19-1.68-.19H9.4c-.89 0-1.34 0-1.67.19a1.5 1.5 0 0 0-.6.6c-.18.33-.18.78-.18 1.67 0 .9 0 1.35.18 1.69q.22.38.6.59c.33.18.78.18 1.68.18h4.9c.89 0 1.34 0 1.67-.18q.38-.21.6-.6c.18-.33.18-.78.18-1.68m3.24 8c0-.9 0-1.34-.19-1.68a1.5 1.5 0 0 0-.59-.59c-.33-.19-.78-.19-1.68-.19H9.4c-.9 0-1.35 0-1.68.19a1.5 1.5 0 0 0-.6.6c-.18.33-.18.78-.18 1.67 0 .9 0 1.35.18 1.69q.22.38.6.59c.33.18.78.18 1.68.18h8.14c.9 0 1.35 0 1.68-.18q.38-.21.6-.6c.18-.33.18-.78.18-1.68'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M4 3.73v16.54m10.3-9.79H9.4c-.9 0-1.35 0-1.68-.18a1.5 1.5 0 0 1-.6-.6c-.18-.33-.18-.78-.18-1.68s0-1.34.18-1.68q.22-.38.6-.59c.33-.19.78-.19 1.68-.19h4.9c.89 0 1.34 0 1.67.19q.38.21.6.6c.18.33.18.78.18 1.67 0 .9 0 1.35-.18 1.69a1.5 1.5 0 0 1-.6.59c-.33.18-.78.18-1.68.18Zm3.24 8H9.4c-.9 0-1.35 0-1.68-.18a1.5 1.5 0 0 1-.6-.6c-.18-.33-.18-.78-.18-1.68s0-1.34.18-1.68q.22-.38.6-.59c.33-.19.78-.19 1.68-.19h8.14c.9 0 1.35 0 1.68.19q.38.21.6.6c.18.33.18.78.18 1.67 0 .9 0 1.35-.19 1.69a1.5 1.5 0 0 1-.59.59c-.33.18-.78.18-1.68.18Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

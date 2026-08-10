import type { Icon } from './types'

export const IconPillBottle: Icon = ({
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
      data-slot='pill-bottle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.49 8.7c0-.92.74-1.66 1.65-1.66h5.37c1.89 0 2.83 0 3.42.59.58.58.58 1.52.58 3.41v5.23c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59H9.17c-.63 0-.95 0-1.21-.07a2 2 0 0 1-1.4-1.4c-.07-.26-.07-.58-.07-1.22 0-.63 0-.95.07-1.21a2 2 0 0 1 1.4-1.4c.26-.07.58-.07 1.21-.07h.58l.49-.01a2 2 0 0 0 1.77-1.75 5 5 0 0 0 .01-.98 2 2 0 0 0-1.77-1.8l-.5-.01h-1.6c-.92 0-1.66-.74-1.66-1.66'
        fill='currentColor'
      />
      <path
        d='M6.49 7.04H17.5v9.23c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59h-3c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.53-.58-3.41z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='4.95'
        y='3.73'
        width='14.1'
        height='3.31'
        rx='1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M6.49 10.35H10c.94 0 1.41 0 1.7.29.3.3.3.76.3 1.7v.74c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H6.49z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}

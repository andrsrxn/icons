import type { Icon } from './types'

export const IconKeyShift: Icon = ({
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
      data-slot='key-shift'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.65 10.73c0-.27.22-.5.5-.5h1.42c.89 0 1.33-.95.7-1.51L12.7 3.77a1.1 1.1 0 0 0-1.4 0L5.73 8.72c-.63.56-.19 1.51.7 1.51h1.42c.28 0 .5.23.5.5v6.43c0 1.38 0 2.07.4 2.55q.17.18.38.33c.54.36 1.31.36 2.87.36 1.55 0 2.33 0 2.87-.36q.2-.14.37-.33c.41-.48.41-1.17.41-2.55z'
        fill='currentColor'
      />
      <path
        d='M15.65 10.73c0-.27.22-.5.5-.5h1.42c.89 0 1.33-.95.7-1.51L12.7 3.77a1.1 1.1 0 0 0-1.4 0L5.73 8.72c-.63.56-.19 1.51.7 1.51h1.42c.28 0 .5.23.5.5v6.43c0 1.38 0 2.07.4 2.55q.17.18.38.33c.54.36 1.31.36 2.87.36 1.55 0 2.33 0 2.87-.36q.2-.14.37-.33c.41-.48.41-1.17.41-2.55z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

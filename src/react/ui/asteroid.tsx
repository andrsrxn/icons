import type { Icon } from './types'

export const IconAsteroid: Icon = ({
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
      data-slot='asteroid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.8 20.4a5.03 5.03 0 1 0 0-10.06 5.03 5.03 0 0 0 0 10.06m-1.22-7.26q1.36-.25 1.6 1.03c.17.99-.15 1.45-1.13 1.54-.75.07-1.3-.09-1.59-1.04-.25-.88.38-1.4 1.12-1.53'
        fill='currentColor'
      />
      <path
        d='M14 15.37q0 5.04-5.12 5.03c-2.82 0-4.87-1.4-5.11-5.03-.21-3.13 1.25-4.65 5.11-5.03C12.43 10 14 12.6 14 15.37Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M7.58 13.14q1.36-.25 1.6 1.03c.17.99-.15 1.45-1.13 1.54-.75.07-1.3-.09-1.59-1.04-.25-.88.38-1.4 1.12-1.53Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M11.41 17.01a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0' fill='currentColor' />
      <path
        d='M11.41 17.01a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0Zm3.69-8.14 4.73-4.73m-3.46 9.42 3.46-3.47M10.42 7.6l3.47-3.47'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

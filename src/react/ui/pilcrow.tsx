import type { Icon } from './types'

export const IconPilcrow: Icon = ({
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
      data-slot='pilcrow'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14 7.52c0-1.89 0-2.83.13-3.42s.34-.58.77-.58h1.92c.42 0 .63 0 .77.58.13.59.13 1.53.13 3.42V16c0 1.89 0 2.83-.13 3.41-.14.59-.35.59-.77.59H14.9c-.43 0-.64 0-.77-.59C14 18.83 14 17.9 14 16z'
        fill='currentColor'
      />
      <path
        d='M17.72 3.68v16.64m-3.8-16.64v16.64M19.8 3.68H9.4c-2.87 0-5.2 2.1-5.2 4.68s2.31 4.68 5.2 4.68h4.51m-1.85 7.28h7.74'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

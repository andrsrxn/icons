import type { Icon } from './types'

export const IconExternalLink: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-external-link'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.69' y='5.6' width='15.69' height='15.69' rx='3' fill='currentColor' />
      <path
        d='M18.38 12.06v3.23c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.7c-2.83 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12V11.6c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h3.34m2.21-2.9h3.02c1.89 0 2.83 0 3.42.59.58.58.58 1.53.58 3.42v3.02m-9.75 2.74 8.88-8.89'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

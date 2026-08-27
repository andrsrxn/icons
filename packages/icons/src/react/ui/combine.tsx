import type { Icon } from './types'

export const IconCombine: Icon = ({
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
      data-slot='ui-icon-combine'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.7' y='2.7' width='8.17' height='8.17' rx='2' fill='currentColor' />
      <rect
        opacity='.2'
        x='13.13'
        y='13.13'
        width='8.17'
        height='8.17'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='2.7'
        y='2.7'
        width='8.17'
        height='8.17'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='13.13'
        y='13.13'
        width='8.17'
        height='8.17'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.73 6h.9c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v.15M9.3 18h-.9c-1.88 0-2.82 0-3.41-.58-.59-.59-.59-1.53-.59-3.42v-.15'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.99 3.43c-1.03 1.02-1.55 1.54-1.66 2.16a2 2 0 0 0 0 .7c.1.62.62 1.13 1.66 2.17M8.05 20.57c1.03-1.02 1.55-1.54 1.66-2.16a2 2 0 0 0 0-.7c-.11-.62-.63-1.13-1.66-2.17'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

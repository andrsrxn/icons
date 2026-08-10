import type { Icon } from './types'

export const IconDecimalsLess: Icon = ({
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
      data-slot='decimals-less'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.12 5.54a1.98 1.98 0 0 1 3.95 0v3a1.98 1.98 0 1 1-3.95 0zm-6.59 0a1.98 1.98 0 0 1 3.95 0v3a1.98 1.98 0 1 1-3.95 0zm6.59 9.96a1.98 1.98 0 0 1 3.95 0v3a1.98 1.98 0 1 1-3.95 0z'
        fill='currentColor'
      />
      <path
        d='M16.12 5.54a1.98 1.98 0 0 1 3.95 0v3a1.98 1.98 0 1 1-3.95 0zm-6.59 0a1.98 1.98 0 0 1 3.95 0v3a1.98 1.98 0 1 1-3.95 0zm6.59 9.96a1.98 1.98 0 0 1 3.95 0v3a1.98 1.98 0 1 1-3.95 0z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path d='M13.48 19.62a.41.41 0 1 1-.82 0 .41.41 0 0 1 .82 0' fill='currentColor' />
      <path
        d='M13.48 19.62a.41.41 0 1 1-.82 0 .41.41 0 0 1 .82 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M6.9 10.1a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0' fill='currentColor' />
      <path
        d='M6.9 10.1a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0Zm1.35 10.02.29-.29c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83l-.3-.3M3.75 17h6.55'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

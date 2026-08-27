import type { Icon } from './types'

export const IconRotate3d: Icon = ({
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
      data-slot='ui-icon-rotate-3d'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.69 8.29c-.6-3.4-2.03-5.72-3.69-5.72-2.2 0-4 4.22-4 9.43s1.8 9.43 4 9.43c.76 0 1.6-.54 1.9-1.43'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.43 12c0-2.2-4.22-4-9.43-4s-9.43 1.8-9.43 4S6.8 16 12 16c1.24 0 3.79 0 6.13-1.07'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m16.91 18.36 1.02-1.8c.47-.81.7-1.22.6-1.62-.12-.4-.53-.63-1.35-1.1l-1.79-1.02'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

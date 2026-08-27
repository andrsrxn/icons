import type { Icon } from './types'

export const IconUserLock: Icon = ({
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
      data-slot='ui-icon-user-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.33 7.92a5.33 5.33 0 1 1-10.66 0 5.33 5.33 0 0 1 10.66 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m15.56 18.88 1.3 2.8H3.72c0-4.65 3.7-8.43 8.27-8.43 2.2 0 4.19.87 5.67 2.3 0 0-.63 1.44-2.11 3.33'
        fill='currentColor'
      />
      <path
        d='M17.33 7.92A5.3 5.3 0 0 1 12 13.25a5.33 5.33 0 1 1 5.33-5.33'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.73 21.52A8.27 8.27 0 0 1 15.2 13.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='15.85'
        y='17.45'
        width='5.93'
        height='4.43'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m20.49 17.45-.15-1.25a1.51 1.51 0 0 0-3-.01l-.16 1.26'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

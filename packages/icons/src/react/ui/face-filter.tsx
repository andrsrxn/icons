import type { Icon } from './types'

export const IconFaceFilter: Icon = ({
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
      data-slot='ui-icon-face-filter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 21.43a9.43 9.43 0 1 1 5.35-17.2c.34 1.01 1.11 2.14 2.22 2.14A9.43 9.43 0 0 1 12 21.43'
        fill='currentColor'
      />
      <path
        d='M13.73 2.75a9.43 9.43 0 1 0 7.7 9.25c0-.38 0-1.13-.15-1.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.78 10.08a.73.73 0 1 1-1.46 0 .73.73 0 0 1 1.46 0m5.9 0a.73.73 0 1 1-1.46 0 .73.73 0 0 1 1.46 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.41 15.34A4.7 4.7 0 0 1 12 16.52a5.2 5.2 0 0 1-3.41-1.18M15.6 5.06c1.59 0 3.3-1.72 3.3-3.3m3.3 3.3c-1.58 0-3.3-1.72-3.3-3.3m-3.3 3.3c1.58 0 3.3 1.75 3.3 3.3m3.3-3.3c-1.56 0-3.3 1.73-3.3 3.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

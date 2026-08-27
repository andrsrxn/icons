import type { Icon } from './types'

export const IconNotes: Icon = ({
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
      data-slot='ui-icon-notes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='17.19'
        height='17.19'
        rx='3'
        transform='matrix(0 -1 -1 0 20.6 21.22)'
        fill='currentColor'
      />
      <rect
        width='17.19'
        height='17.19'
        rx='3'
        transform='matrix(0 -1 -1 0 20.6 21.22)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.88 11.45h8.44m-8.56 4.24h5.3M12.1 5.62V2.44M7.76 5.62V2.44m8.48 3.18V2.44'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

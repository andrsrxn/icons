import type { Icon } from './types'

export const IconTextLowercase: Icon = ({
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
      data-slot='ui-icon-text-lowercase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.24 17.86A3.8 3.8 0 0 1 13.5 14c0-2.14 1.68-2.79 3.75-2.79S21 11.86 21 14a3.8 3.8 0 0 1-3.75 3.86m-10.81 0A3.8 3.8 0 0 1 2.69 14c0-2.14 1.68-2.79 3.75-2.79s3.75.65 3.75 2.79a3.8 3.8 0 0 1-3.75 3.86'
        fill='currentColor'
      />
      <path
        d='M17.24 17.86c-2.07 0-3.75-1.46-3.75-3.26 0-2.39 1.68-3.26 3.75-3.26H21v3.26c0 1.8-1.68 3.26-3.75 3.26m-10.81 0c-2.07 0-3.75-1.46-3.75-3.26 0-2.39 1.68-3.26 3.75-3.26h3.75v3.26c0 1.8-1.68 3.26-3.75 3.26'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.67 18.05s-.48-.37-.48-1.5v-6.2c0-2.45-.57-3.91-2.93-4.33-1.52-.28-2.71.37-3.6 1.49m17.9 10.54s-.49-.37-.49-1.5v-6.2c0-2.45-.57-3.91-2.93-4.33-1.52-.28-2.7.37-3.6 1.49'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

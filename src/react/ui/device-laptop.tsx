import type { Icon } from './types'

export const IconDeviceLaptop: Icon = ({
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
      data-slot='device-laptop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19.71 15.99c.51 1.01.77 1.52.63 1.92a1 1 0 0 1-.22.36c-.3.31-.87.31-2 .31H5.87c-1.15 0-1.72 0-2.02-.3a1 1 0 0 1-.22-.37c-.14-.4.12-.91.64-1.94.22-.41.32-.62.5-.76l.2-.12c.2-.09.43-.09.9-.09H18.1c.48 0 .71 0 .91.1l.2.12c.17.13.28.34.5.77'
        fill='currentColor'
      />
      <path
        d='M19.16 14.98H4.79m14.37 0V9.42c0-1.89 0-2.83-.6-3.41-.58-.6-1.52-.6-3.4-.6H8.79c-1.89 0-2.83 0-3.41.6-.59.58-.59 1.52-.59 3.4v5.57m14.37 0 .33.54c.84 1.36 1.27 2.03.98 2.55-.29.51-1.08.51-2.68.51H6.16c-1.58 0-2.36 0-2.65-.5-.29-.52.12-1.2.94-2.54l.34-.56'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}

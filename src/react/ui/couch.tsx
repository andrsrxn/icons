import type { Icon } from './types'

export const IconCouch: Icon = ({
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
      data-slot='ui-icon-couch'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.12 4.7h11.76v4.22l-1.6 1.4-.64 4.64H8.47l-.6-4.65-1.75-1.39z'
        fill='currentColor'
      />
      <path
        d='M18.24 9.23c0-1.78 0-2.67-.37-3.34a3 3 0 0 0-1.2-1.2c-.67-.37-1.56-.37-3.34-.37h-2.66c-1.78 0-2.67 0-3.34.37a3 3 0 0 0-1.2 1.2c-.37.67-.37 1.56-.37 3.34m13.78 5.17c0 1.57 0 2.36-.3 2.97a3 3 0 0 1-1.42 1.43c-.61.28-1.4.28-2.97.28h-5.7c-1.57 0-2.36 0-2.97-.28a3 3 0 0 1-1.43-1.43c-.29-.61-.29-1.4-.29-2.97'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.22 11.84v1.32c0 .95 0 1.42-.3 1.71-.29.3-.76.3-1.7.3H9.78c-.94 0-1.41 0-1.7-.3s-.3-.76-.3-1.7v-1.33m0-.06a2.61 2.61 0 1 0-2.61 2.62m13.66.06a2.61 2.61 0 1 0-2.61-2.62'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

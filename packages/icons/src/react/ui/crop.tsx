import type { Icon } from './types'

export const IconCrop: Icon = ({
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
      data-slot='ui-icon-crop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.38 5.48h8.05c3.77 0 5.65 0 6.83 1.17s1.17 3.06 1.17 6.83v8.23'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.67 18.66h-8.18c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.05-1.18-6.83V2.31'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M5.86 7.76c0-.95 0-1.42.3-1.71.29-.3.76-.3 1.7-.3h6.28c1.88 0 2.82 0 3.41.6.59.58.59 1.52.59 3.4v6.5c0 .94 0 1.4-.3 1.7-.29.3-.76.3-1.7.3H9.86c-1.88 0-2.82 0-3.41-.6-.59-.58-.59-1.52-.59-3.4z'
        fill='currentColor'
      />
    </svg>
  )
}

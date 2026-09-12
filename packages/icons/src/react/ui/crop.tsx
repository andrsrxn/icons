import type { Icon } from './types'

export const IconCrop: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-crop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.84 5.11h8.94c3.78 0 5.66 0 6.83 1.18 1.17 1.17 1.17 3.05 1.17 6.82v9.14'
        stroke='currentColor'
      />
      <path
        d='M22.2 19.04h-9.07c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.05-1.17-6.82V1.77'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M5.52 7.4c0-.93 0-1.4.3-1.7.29-.3.76-.3 1.7-.3h6.96c1.88 0 2.82 0 3.41.6.59.58.59 1.52.59 3.4v7.2c0 .93 0 1.4-.3 1.7-.29.3-.76.3-1.7.3H9.52c-1.88 0-2.83 0-3.41-.6-.59-.58-.59-1.52-.59-3.4z'
        fill='currentColor'
      />
    </svg>
  )
}

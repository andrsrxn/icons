import type { Icon } from './types'

export const IconPillBottle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-pill-bottle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.17 7h13.66v8.41c0 2.65 0 3.97-.6 4.94a4 4 0 0 1-1.3 1.3c-.96.6-2.28.6-4.93.6H7.66a2.48 2.48 0 1 1 0-4.98h1.62a2.76 2.76 0 0 0 0-5.51H8.6a3.43 3.43 0 0 1-3.43-3.43z'
        fill='currentColor'
      />
      <path
        d='M18.83 7v8.41c0 2.65 0 3.97-.6 4.94a4 4 0 0 1-1.3 1.3c-.96.6-2.28.6-4.93.6s-3.97 0-4.94-.6a4 4 0 0 1-1.29-1.3c-.6-.97-.6-2.3-.6-4.94V7'
        stroke='currentColor'
      />
      <path
        d='M5.89 7H18.1c.58 0 .87 0 1.1-.06a2 2 0 0 0 1.47-1.46c.06-.23.06-.52.06-1.1v0c0-.58 0-.87-.06-1.1a2 2 0 0 0-1.46-1.46c-.24-.06-.53-.06-1.1-.06H5.88c-.58 0-.87 0-1.1.06a2 2 0 0 0-1.47 1.46c-.06.23-.06.52-.06 1.1v0c0 .58 0 .87.06 1.1a2 2 0 0 0 1.46 1.46c.24.06.53.06 1.1.06'
        stroke='currentColor'
      />
      <path
        d='M5.17 11.38H10c.94 0 1.41 0 1.7.29.3.3.3.76.3 1.7v1.87c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H5.17z'
        stroke='currentColor'
      />
    </svg>
  )
}

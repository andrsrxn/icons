import type { Icon } from './types'

export const IconError500: Icon = ({
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
      data-slot='icon-ui-error-500'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect x='9.49' y='7.22' width='5.04' height='9.56' rx='2.52' stroke='currentColor' />
      <rect x='17.3' y='7.22' width='5.04' height='9.56' rx='2.52' stroke='currentColor' />
      <path
        d='M2.1 16.53h2.2a2.43 2.43 0 1 0 0-4.86H1.78v-2.2c0-.94 0-1.41.29-1.7.3-.3.76-.3 1.7-.3h2.44'
        stroke='currentColor'
      />
    </svg>
  )
}

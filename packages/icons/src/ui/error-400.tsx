import type { Icon } from './types'

export const IconError400: Icon = ({
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
      data-slot='icon-ui-error-400'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M5.8 16.38v-6.7c0-1.34 0-2.01-.36-2.12-.35-.1-.73.45-1.47 1.57L2.2 11.76c-.46.69-.69 1.03-.55 1.3.14.26.56.26 1.38.26h4.2'
        stroke='currentColor'
      />
      <rect x='9.77' y='7.42' width='4.86' height='9.23' rx='2.43' stroke='currentColor' />
      <rect x='17.4' y='7.41' width='4.86' height='9.23' rx='2.43' stroke='currentColor' />
    </svg>
  )
}

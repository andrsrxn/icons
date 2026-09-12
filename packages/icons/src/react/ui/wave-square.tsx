import type { Icon } from './types'

export const IconWaveSquare: Icon = ({
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
      data-slot='icon-ui-wave-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.82 8.92V6.75c0-1.89 0-2.83.59-3.42.58-.58 1.53-.58 3.41-.58H8c1.89 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v10.5c0 1.89 0 2.83.59 3.42.58.58 1.52.58 3.41.58h1.19c1.88 0 2.83 0 3.41-.58.59-.59.59-1.53.59-3.42v-2.29'
        stroke='currentColor'
      />
    </svg>
  )
}

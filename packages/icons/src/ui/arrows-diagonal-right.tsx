import type { Icon } from './types'

export const IconArrowsDiagonalRight: Icon = ({
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
      data-slot='icon-ui-arrows-diagonal-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M20.54 3.56 3.8 20.29' stroke='currentColor' />
      <path
        d='M10.08 21.28H6.73c-1.9 0-2.84 0-3.42-.58-.59-.59-.59-1.53-.59-3.42v-3.36'
        stroke='currentColor'
      />
      <path
        d='M13.92 2.72h3.35c1.9 0 2.84 0 3.42.58.59.59.59 1.53.59 3.42v3.36'
        stroke='currentColor'
      />
    </svg>
  )
}

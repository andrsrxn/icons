import type { Icon } from './types'

export const IconArrowsDiagonalLeft: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-arrows-diagonal-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'arrows-diagonal-left-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'arrows-diagonal-left-title'}>{title}</title>
      ) : null}
      <path
        d='m4.38 4.47 14.93 14.92m-5.53 1.2h2.8c1.9 0 2.84 0 3.42-.58.59-.59.59-1.53.59-3.42v-2.81M10.22 3.41h-2.8c-1.9 0-2.84 0-3.42.58-.59.59-.59 1.53-.59 3.42v2.81'
        stroke='currentColor'
      />
    </svg>
  )
}

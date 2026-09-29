import type { Icon } from './types'

export const IconCornerRadiusRound: Icon = ({
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
      data-slot='icon-ui-corner-radius-round'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.18 3.45a8.6 8.6 0 0 1 8.61 8.61v8.6H6.6c-1.9 0-2.83 0-3.42-.6-.59-.58-.59-1.52-.59-3.4V3.44z'
        fill='currentColor'
      />
      <path
        d='M2.58 3.57h.4c6.43 0 9.65 0 12.03 1.43a10 10 0 0 1 3.42 3.43c1.43 2.37 1.43 5.6 1.43 12.03'
        stroke='currentColor'
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconCornerRadiusSquare: Icon = ({
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
      data-slot='icon-ui-corner-radius-square'
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
        d='M13.8 3.45c2.82 0 4.24 0 5.11.87.88.88.88 2.3.88 5.13v11.2H6.6c-1.9 0-2.83 0-3.42-.58-.59-.59-.59-1.53-.59-3.42V3.45z'
        fill='currentColor'
      />
      <path
        d='M2.58 3.57h11.28c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v10.89'
        stroke='currentColor'
      />
    </svg>
  )
}

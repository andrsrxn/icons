import type { Icon } from './types'

export const IconStrokeCapSquare: Icon = ({
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
      data-slot='icon-ui-stroke-cap-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16 4.93c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.56c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H3.42c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7V6.93c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3zm-1.3 9.54a2.76 2.76 0 1 1 0-5.52 2.76 2.76 0 0 1 0 5.52'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M1.65 11.71h10.3' stroke='currentColor' />
      <path d='M17.46 11.71a2.76 2.76 0 1 0-5.52 0 2.76 2.76 0 0 0 5.52 0' stroke='currentColor' />
      <path
        d='M1.65 18.49h14.72c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-1.56c0-2.83 0-4.24-.88-5.12s-2.29-.88-5.12-.88H1.65'
        stroke='currentColor'
      />
    </svg>
  )
}

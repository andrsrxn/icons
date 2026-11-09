import type { Icon } from './types'

export const IconStrokeCapSquare: Icon = ({
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
      data-slot='icon-ui-stroke-cap-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.6 4.93c2.59 0 3.89 0 4.85.58a4 4 0 0 1 1.34 1.35c.58.95.58 2.25.58 4.85s0 3.9-.58 4.86a4 4 0 0 1-1.34 1.34c-.96.58-2.26.58-4.86.58H3.42c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7V6.93c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3zm-.9 9.54a2.76 2.76 0 1 1 0-5.52 2.76 2.76 0 0 1 0 5.52'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M1.65 11.71h10.3' stroke='currentColor' />
      <path d='M17.46 11.71a2.76 2.76 0 1 0-5.52 0 2.76 2.76 0 0 0 5.52 0' stroke='currentColor' />
      <path
        d='M1.65 18.49h13.94c2.6 0 3.9 0 4.86-.58a4 4 0 0 0 1.34-1.34c.58-.96.58-2.26.58-4.86s0-3.9-.58-4.85a4 4 0 0 0-1.34-1.35c-.96-.58-2.26-.58-4.86-.58H1.65'
        stroke='currentColor'
      />
    </svg>
  )
}

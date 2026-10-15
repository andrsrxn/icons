import type { Icon } from './types'

export const IconBookSparkle: Icon = ({
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
      data-slot='icon-ui-book-sparkle'
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
        d='M3.03 5.75c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58H18l-1.2 2.27-2 1.52L18 8.57l2.96-3.03v8.95c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59H7.03c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.53-.58-3.41z'
        fill='currentColor'
      />
      <path
        d='M20.97 11.55v.94c0 2.83 0 4.24-.88 5.12s-2.29.88-5.12.88H3.03V7.75c0-2.83 0-4.25.88-5.12s2.29-.88 5.12-.88h3.95'
        stroke='currentColor'
      />
      <path
        d='M3.03 18.49c0 1.66 0 2.49.46 3.04l.26.26c.56.46 1.39.46 3.04.46h8.85c1.66 0 2.49 0 3.04-.46l.26-.26c.46-.55.46-1.38.46-3.04'
        stroke='currentColor'
      />
      <path d='M13.6 5.7c2.08 0 4.3-2.24 4.3-4.3' stroke='currentColor' />
      <path d='M22.2 5.7c-2.06 0-4.3-2.23-4.3-4.3' stroke='currentColor' />
      <path d='M13.6 5.7c2.07 0 4.3 2.28 4.3 4.3' stroke='currentColor' />
      <path d='M22.2 5.7c-2.03 0-4.3 2.25-4.3 4.3' stroke='currentColor' />
    </svg>
  )
}
